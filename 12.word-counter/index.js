document.addEventListener("DOMContentLoaded", () => {
    counter() 
})




const counter = () => {
    message.addEventListener('input', () => {    
        const message = document.getElementById("message")
        const countChar = document.getElementById("character-count")
        const countWord = document.getElementById("word-count")
        const wordCount = message.value.split(" ").length
        
        console.log(message.value.length)
        countChar.innerText = message.value.trim() == "" ? "0" : message.value.length
        countWord.innerText = message.value.trim() == "" ? "0" : wordCount 
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