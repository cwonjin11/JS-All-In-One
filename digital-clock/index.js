
document.addEventListener("click", (event) => {console.log("ʘ CLICKED ʘ👀", event.target)})


document.addEventListener("DOMContentLoaded", () => {

    displayDigitalClock();
    displayDate();
    addColorEffectEvent();

})

const displayDate = () => {
    const currentDate = new Date();

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let currentMonth = month[currentDate.getMonth()];
    let currentDay = currentDate.getDate();
    let currentYear = currentDate.getFullYear();
    // console.log(currentYear)
    document.getElementById("month").innerHTML = currentMonth;
    document.getElementById("date").innerHTML = currentDay;
    document.getElementById("year").innerHTML = currentYear;


}

const displayDigitalClock = () => {

    const todayDateTime = new Date()

    let hours = todayDateTime.getHours()
    let minutes = todayDateTime.getMinutes()
    let seconds = todayDateTime.getSeconds()
    let session = document.getElementById('session')

    if (hours > 12) { 
        hours = hours - 12
    }

    if (hours <10 ) {
        hours = "0" + hours;
    }
    if (minutes <10 ) {
        minutes = "0" + minutes;
    }
    if (seconds <10 ) {
        seconds = "0" + seconds;
    }

    if (hours >= 12) {
        session.innerHTML = 'PM';
        // console.log(hours-12);
    } else {
        session.innerHTML = 'AM';
    }



    
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}
setInterval(displayDigitalClock, 10)


addColorEffectEvent=() => {
    const dgclock = document.querySelector('.container');
    console.log(dgclock)

    const random = (number) => {
      return Math.floor(Math.random() * (number+1));
    }
    
    dgclock.addEventListener('mouseover', () => {
      const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
      hours.style.color = rndCol;
      minutes.style.color = rndCol;
      seconds.style.color = rndCol;
      session.style.color = rndCol;
    });

}