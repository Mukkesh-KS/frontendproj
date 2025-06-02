const btn =document.getElementById("btn");
const val=document.getElementById("val");
let v = 0;
btn.addEventListener("click",()=>{
    v++;
    val.textContent=v;

})