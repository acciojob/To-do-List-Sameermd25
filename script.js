//your code here
const ol=document.getElementById("todoList");
const btn=document.getElementById("addTodoBtn");
const input=document.getElementById("input");

btn.addEventListener("click",()=>{
	const li=document.createElement("li");
	li.innerText=input.value;
	ol.appendChild(li);
	input.value=""
})
