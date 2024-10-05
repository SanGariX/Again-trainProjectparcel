
// console.log("1");
// setTimeout(onTime, 500)
// console.log("2");
// function onTime() {
//     console.log("TIME");
// }
// const date = new Date()
// console.log(date);
// const month = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"]
// console.log(month[date.getMonth()]);
// const day = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота"]
// console.log(day[date.getDay()]);
// console.log("new Date()", date);
// const currentDate = Date.now()
// console.log("Date.now()",currentDate);


const box = document.querySelector(".box");
const span =document.querySelector(".js-timer");
let counter = 11
setTimeout(()=> {
    box.style.display = "flex"
    const id = setInterval(()=>{
        counter -=1
        span.textContent = counter 
        if(!counter){
            clearInterval(id)
            box.style.display = "none"
        }
    }, 1000)
},0 )


//Виклик селекторів
const day = document.querySelector(".date-day");
const date = document.querySelector(".date");
const month = document.querySelector(".date-month");
const year = document.querySelector(".date-year");
const digitalClock = document.querySelector(".digital-clock");
const clockSecondsArrow = document.querySelector(".clock-seconds__arrow");
const clockMinutesArrow = document.querySelector(".clock-minutes__arrow");
const clockHoursArrow = document.querySelector(".clock-hours__arrow");
// Масиви із часом
const dayArr = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота"]
const monthArr = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"]
let timerSeconds = 0
// визначення дати
setInterval(()=>{
const currentTime = new Date()
const currentDay = dayArr[currentTime.getDay()]
const currentMonth = monthArr[currentTime.getMonth()]
const currentDate = currentTime.getDate()
const currentYear = currentTime.getFullYear()
const currentHour = currentTime.getHours()
const currentMinutes = currentTime.getMinutes()
const currentSeconds = currentTime.getSeconds()
const formatTime = `${currentHour.toString().padStart(2, "0")}: ${currentMinutes.toString().padStart(2, "0")}: ${currentSeconds.toString().padStart(2, "0")}`
const currentSecondTime = 360/60*currentSeconds 
const currentMinutesTime = 360/60*currentMinutes
const currentHoursTime = (360/12)*currentHour+currentMinutes+currentSeconds*0.1
day.textContent = currentDay
date.textContent = currentDate
month.textContent = currentMonth
year.textContent = currentYear
digitalClock.textContent = `Поточний час: ${formatTime}`  
clockSecondsArrow.style.transform = `rotate(${currentSecondTime}deg)`
clockMinutesArrow.style.transform = `rotate(${currentMinutesTime}deg)`
clockHoursArrow.style.transform = `rotate(${currentHoursTime}deg)`
}, 1000)
