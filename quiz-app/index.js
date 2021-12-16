//https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple
//https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple


const _question = document.getElementById('question');
const _options = document.querySelector('.quiz-options');
const _correctScore = document.getElementById('correct-score');
const _totalQuestion = document.getElementById('total-question');
const _checkBtn = document.getElementById('check-answer');
const _playAgainBtn = document.getElementById('play-again');
const _result = document.getElementById('result');

let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 3;


function eventListeners(){
    _checkBtn.addEventListener('click', checkAnswer)
    _playAgainBtn.addEventListener('click', restartQuiz)
}



document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    eventListeners();
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore; 
});

async function loadQuestion() {
    const APIUrl = 'https://opentdb.com/api.php?amount=10&category=18'
    const result = await fetch(`${APIUrl}`)
    const data = await result.json();
    _result.innerHTML = ""
    showQuestion(data.results[0])
}


function showQuestion(data) {
    _checkBtn.disabled = false
    correctAnswer = data.correct_answer
    let incorrectAnswer = data.incorrect_answers
    let optionList = incorrectAnswer;
    optionList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer)
    _question.innerHTML = `<span class="category">${data.category}</span> 
                           <span class="difficulty"> Difficulty: ${capitalizeFirstLetter(data.difficulty)}</span> 
                           <br>${data.question}`
    _options.innerHTML = `${optionList.map((option, index) => `
        <li> ${index + 1}.<span> ${option} </span></li>
    `).join('')}`

    selectOption();

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

// options selection
function selectOption(){
    _options.querySelectorAll('li').forEach((option) => {
        option.addEventListener('click', () => {
            if(_options.querySelector('.selected')){
                const activeOption = _options.querySelector('.selected');
                activeOption.classList.remove('selected');
            }
            option.classList.add('selected')
        })
    });
    console.log(correctAnswer)
}


// answer checking

function checkAnswer() {
    _checkBtn.disabled = true;

    if(_options.querySelector('.selected')){
        let selectedAnswer = _options.querySelector('.selected span').textContent;
        console.log(selectedAnswer)
        console.log(correctAnswer)
        if(selectedAnswer.trim() == HTMLdecode(correctAnswer)) {
            correctScore++;
            _result.innerHTML = `<p> <i class="fas fa-check"></i>Correct Answer!</p>`;
        } else{
            _result.innerHTML =`<p> <i class="fas fa-times"></i>Incorrect Answer!</p><p><small><b>Correct Answer: </b>${correctAnswer}</small></p>`;
        }
        checkCount()
    } else {
        _result.innerHTML = `<p><i class="fas fa-question"></i>Please select an option! </p>`
        _checkBtn.disabled = false;
    }
}


function HTMLdecode(textString){
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;

}

function checkCount() {
    askedCount++
    setCount()
    if(askedCount == totalQuestion){
        _result.innerHTML = `<p> Your total score : ${correctScore} </p>`
        _playAgainBtn.style.display = "block";
        _checkBtn.style.display = "none";


    } else{
        setTimeout(()=> {
        loadQuestion();
        }, 1000)
    }

}


function setCount(){
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;

}

function restartQuiz(){
    correctScore = askedCount = 0;
    _playAgainBtn.style.display = "none";
    _checkBtn.style.display = "block";
    _checkBtn.disabled = false;
    setCount();
    loadQuestion();



}