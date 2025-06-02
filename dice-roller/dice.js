const diceel=document.getElementById("dice");
const btnel=document.getElementById("spinbtn");
const ulel=document.getElementById("diceHistory");
const rstbtn=document.getElementById("rstbtn");
 const dice_val= ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
   let history=[];
btnel.addEventListener("click",()=>{
    diceel.classList.add("roll_anim");
    setTimeout(()=>{diceel.classList.remove("roll_anim")},1000);
    const rand=Math.floor((Math.random()*6))+1;
    diceel.innerHTML=dice_val[rand];
    history.push(rand);
   
    History();
})
function History(){
    ulel.innerHTML=" ";
    for(let i=0;i<history.length;i++){
    const l = document.createElement("li");
     l.innerHTML=`Role${i+1}: <span>${dice_val[history[i]]}</span>`;
     ulel.appendChild(l);
    }
}

rstbtn.addEventListener("click",()=>{    ulel.innerHTML=" ";
history=[];
});