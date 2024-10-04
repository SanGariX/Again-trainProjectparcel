
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
},1000 )