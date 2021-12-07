document.addEventListener("click", (event) => { console.log("ʘ CLICKED ʘ", event.target) })



document.addEventListener("DOMContentLoaded", () => {

    addColorEffectEvent();

})


addColorEffectEvent=() => {
    const btn = document.querySelector('#btn');

    const random = (number) => {
      return Math.floor(Math.random() * (number+1));
    }
    
    btn.addEventListener('click', () => {
      const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
      document.body.style.backgroundColor = rndCol;
   
    });

}