document.addEventListener("DOMContentLoaded", () => {
    counter() 
})

const message = document.getElementById("message")
const countChar = document.getElementById("character-count")
const countWord = document.getElementById("word-count")


const counter = () => {
    message.addEventListener('input', () => {    
        const wordCount = message.value.split(" ").length
        countChar.innerText = message.value.length
        countWord.innerText = message.length == 0 ? "0" : wordCount 
    })
}







// const countWords = () => {
//     const message = document.getElementById("message").value
//     const countChar = document.getElementById("character-count")
//     const countWord = document.getElementById("word-count")
//     const wordCount = message.split(" ").length


//     countChar.innerText = message.length  
//     countWord.innerText = message.length == 0 ? "0" : wordCount 

// }