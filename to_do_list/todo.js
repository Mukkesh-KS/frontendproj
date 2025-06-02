// Listen for Enter key press on the input field
document.getElementById("taskinput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addtask(); // Call the same function
  }
});

function addtask(){
  const input=  document.getElementById("taskinput")
  const task=input.value.trim();
  if(task=="") return;
  const li =document.createElement("li")
  li.textContent=task;
  li.addEventListener('click',()=>{li.classList.toggle('done')})
  li.addEventListener('dblclick',()=>{li.remove()})
  document.getElementById("tasklist").appendChild(li);
   input.value = '';
}