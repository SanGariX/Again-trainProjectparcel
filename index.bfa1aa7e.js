const t=document.querySelector(".box"),e=document.querySelector(".js-timer");let o=11;setTimeout((()=>{t.style.display="flex";const r=setInterval((()=>{o-=1,e.textContent=o,o||(clearInterval(r),t.style.display="none")}),1e3)}),0);const r=document.querySelector(".date-day"),n=document.querySelector(".date"),c=document.querySelector(".date-month"),a=document.querySelector(".date-year"),l=document.querySelector(".digital-clock"),d=document.querySelector(".clock-seconds__arrow"),u=document.querySelector(".clock-minutes__arrow"),s=document.querySelector(".clock-hours__arrow"),y=["Неділя","Понеділок","Вівторок","Середа","Четверг","П'ятниця","Субота"],m=["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"];setInterval((()=>{const t=new Date,e=y[t.getDay()],o=m[t.getMonth()],S=t.getDate(),g=t.getFullYear(),i=t.getHours(),q=t.getMinutes(),x=t.getSeconds(),$=`${i.toString().padStart(2,"0")}: ${q.toString().padStart(2,"0")}: ${x.toString().padStart(2,"0")}`,C=6*x,_=6*q,p=30*i+q+.1*x;r.textContent=e,n.textContent=S,c.textContent=o,a.textContent=g,l.textContent=`Поточний час: ${$}`,d.style.transform=`rotate(${C}deg)`,u.style.transform=`rotate(${_}deg)`,s.style.transform=`rotate(${p}deg)`}),1e3);
//# sourceMappingURL=index.bfa1aa7e.js.map
