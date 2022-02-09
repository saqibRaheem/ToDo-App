var todo = document.getElementById("todo-list") 

function addtodo(){



    var inp = document.getElementById("iteam");
    var list = document.createElement("li");
    var listText = document.createTextNode(inp.value);
    var br = document.createElement("br")
    list.appendChild(listText);
   list.appendChild(br)
    todo.appendChild(list);
    
    list.setAttribute("class", "item-input");    
 
 var delBtn = document.createElement("button");
 var delbtnText = document.createTextNode("Delete |");
 delBtn.appendChild(delbtnText); 
 delBtn.setAttribute("class", "removebtn");    

list.appendChild(delBtn);
delBtn.setAttribute("onclick","deletebtn(this)");

var rembtn = document.createElement("button");
var remText = document.createTextNode("| Edit");
rembtn.appendChild(remText);
rembtn.setAttribute("class", "editbtn");    
list.appendChild(rembtn);
rembtn.setAttribute("onclick","remove(this)");
inp.value = " "

var divv = document.createElement("div");
divv.setAttribute("class"," mt-1 flot-end")
// divv.appendChild(delBtn)
// divv.appendChild(rembtn)
// list.appendChild(divv);
// console.log(list);




}
function deletebtn(e){
  
e.parentNode.remove()
}

function remove(e){
    var foo = e.parentNode.firstChild.nodeValue
    var EditVal = prompt("enter value", foo);
    e.parentNode.firstChild.nodeValue = EditVal;
}
function deleteall(){
    todo.innerHTML = " "
}