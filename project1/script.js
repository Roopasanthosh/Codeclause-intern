const i=document.getElementById("search");
const j=document.getElementById("list");
function addtask(){
	if(i.value==='')
	{
		alert("please enter task");
	}
	else{
		let li=document.createElement("li");
		li.innerHTML= i.value;
		list.appendChild(li);
		let span=document.createElement("span");
		span.innerHTML="\u00d7";
		li.appendChild(span);
	}
	i.value="";
	saveData();
}
list.addEventListener("click",function(e){
	if(e.target.tagName==="LI"){
		e.target.classList.toggle("two");
        saveData();
	}
	else if(e.target.tagName==="SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
},false);
function saveData(){
	localStorage.setItem("data",list.innerHTML);
}
function show(){
	list.innerHTML=localStorage.getItem("data");
}
show();

