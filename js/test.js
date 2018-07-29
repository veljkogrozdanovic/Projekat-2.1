window.onload = loadF;

  
let num = 1;
function inputF() {
   let  inputTask = document.getElementById("inputText").value;
   //console.log(inputTask);
   if(inputTask === "") {
       alert("Niste uneli nista novo!")
   } else {
    let para = document.createElement("p");
    para.innerHTML = inputTask;
    //console.log(para);
    let butt = document.createElement("button");
    butt.innerHTML = "x";
    butt.setAttribute("onclick", "deleteOneTaskF(this.id)")
    butt.setAttribute("id", "task" + num);
    let newDiv = document.createElement("div");
    newDiv.appendChild(para);
    newDiv.appendChild(butt);
    document.getElementById("box").appendChild(newDiv);
    document.getElementById("inputText").value = "";
    document.getElementById("inputText").placeholder = "New task";
    document.getElementById("filter").value = "";
    document.getElementById("filter").placeholder = "Filter Task"
    filterF();
    saveF();
    num++;
    document.getElementById("inputText").focus();
   }
}

let x;
function deleteOneTaskF(id) {
 x = `${id}`
//console.log(x);
let test = confirm("Da li zelis da obrises ovaj task?");
    if (test === true) {
        let newTask= document.getElementById(x);
        //console.log(newTask);
        newTask.parentNode.remove(newTask);
        document.getElementById("filter").value = "";
        document.getElementById("filter").placeholder = "Filter Task"
        saveF();
        filterF()
    }
}

function deleteAllF() {
    let test = confirm("Da li zelis da obrises sve taskove?")
    if (test === true) {
document.getElementById("box").innerHTML = "";
document.getElementById("filter").value = "";
document.getElementById("filter").placeholder = "Filter Task"
saveF();
    }
}

function filterF() {
   let filterText = document.getElementById("filter").value.toLowerCase();
   //console.log(filterText);
  let allP =  document.getElementById("box").getElementsByTagName("p");
  for (let i = 0; i < allP.length; i++) {
      let pSmall = allP[i].innerHTML.toLowerCase();
      //console.log(pSmall);
      if(pSmall.includes(filterText) === true) {
        allP[i].parentNode.style.display = "block";
         //console.log("da");
      }
      else {
         allP[i].parentNode.style.display = "none";
         //console.log("ne");
      }
  }
}
function saveF() {
    localStorage.setItem("memo", document.getElementById("box").innerHTML);
}


function loadF() {
 document.getElementById("box").innerHTML = localStorage.getItem("memo");
 let x = document.getElementById("box").getElementsByTagName("div");
 for (let i = 0; i < x.length; i ++) {
    x[i].style.display = "block"
    console.log(document.getElementById("filter").value);
 }
}
