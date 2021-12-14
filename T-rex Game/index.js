
//DOM Event listener will listen out when all the HTML has loaded and only then execute the javascript
document.addEventListener("DOMContentLoad", () => {

const dino = document.querySelector('.dino')

function control(e) {
    // website used :  "keycode.info" to see each key code
    if(e.keyCode === 32) {
        console.log("pressed")
    }
}

document.addEventListener('keyup', control)

})