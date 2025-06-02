const amt=document.getElementById("Amount");
const tip=document.getElementById("tip");
const total=document.getElementById("tot");
const caalbtn=document.getElementById("calbtn")
function calculateTip(){
    const billamt=parseFloat(amt.value);
    const tipamt=parseFloat(tip.value);
    const totamt=billamt+(billamt*(tipamt/100));
    total.innerText=totamt.toFixed(2);
}
caalbtn.addEventListener("click",calculateTip);

