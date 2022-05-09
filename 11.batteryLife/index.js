
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
            <ul class="list-group">
            <li class="list-group-item active" style="text-align: center"> Details </li>
            <li class="list-group-item">Current Level: ${battery.level * 100 + "%"}</li>
            <li class="list-group-item">Charging: ${battery.charging ? "Yes" : "No"}</li>
            <li class="list-group-item"> disChargingTime: ${battery.dischargingTime == Infinity ? "Unplug the charger and wait.." : battery.dischargingTime / 60 + "mins"} </li>
            </ul>
            `
        })


        refreshButton.addEventListener("click", () => {
            window.location.reload()
        })
        
    })  
}