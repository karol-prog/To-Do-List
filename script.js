const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  //if input field is empty it will be alert displeyed.//
  if (inputBox.value === "") {
    alert("You must write something!");
    //else add value to variable li and display it to listContainer(html)//
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span"); //creating the cross for deleted the li//
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""; //it removes added text in input//
  saveData();
}

listContainer.addEventListener("click",function (e) { //function for check if we click on LI(list) or on span(x)//
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); //storing the data in to do list and calling it addTask, click//
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
