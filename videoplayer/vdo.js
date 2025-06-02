const watchbtn=document.getElementById("watchBtn");
const closebtn=document.getElementById("closeBtn");
const vdeopop=document.getElementById("videoPopup");

watchbtn.addEventListener("click",()=>{
    vdeopop.style.display="flex";
})

closebtn.addEventListener("click",()=>{
    vdeopop.style.display="none";
})