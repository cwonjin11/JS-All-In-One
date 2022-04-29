let addButton = document.getElementById("add-todo")
let todoContainer = document.getElementById("todoContainer")
let inputField = document.getElementById("input-field")
let saveButton = document.getElementById("save")
let storedInput = localStorage.getItem("p")
let todoList = []

if(storedInput) {
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value
    todoContainer.appendChild(paragraph)
}


addButton.addEventListener('click', function(){
    const task = inputField.value
    if(!task){
        alert("please fill out the task")
        return
    }

    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputField.value
    todoContainer.appendChild(paragraph)
    console.log(todoContainer.innerText)
    inputField.value = ""


    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through"
    })
    paragraph.addEventListener('dblclick', () => {
        todoContainer.removeChild(paragraph)
    })
    
})

const saveLocalStorage = () => {
    localStorage.setItem("p", todoContainer.innerText)
}
saveButton.addEventListener("click", saveLocalStorage)

