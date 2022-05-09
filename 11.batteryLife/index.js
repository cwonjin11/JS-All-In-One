
const clickButton = document.getElementById("lifeCheck")
const bLife = document.getElementById("batteryLife")
const refreshButton = document.getElementById("refresh")

document.addEventListener("DOMContentLoaded", () => {

    getBatteryLife();

})


const getBatteryLife = () => {
   
    navigator.getBattery().then( battery =>  {
        console.log(battery)
        clickButton.addEventListener("click", () => {
            console.log(battery.dischargingTime)
            
            if (bLife.style.display !== "none") {
                bLife.style.display = "block";
            } 

            bLife.innerHTML = 
            `
            <li>Current Level: ${battery.level * 100 + "%"}</li>
            <li>Charging: ${battery.charging ? "Yes" : "No"}</li>
            <li> disChargingTime: ${battery.dischargingTime == Infinity ? "Unplug the charger and wait.." : battery.dischargingTime / 60 + "mins"} </li>
            `
        })


        refreshButton.addEventListener("click", () => {
            window.location.reload()
        })
        
    })  
}