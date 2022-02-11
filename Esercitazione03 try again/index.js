// dichiaro la variabili
var addBtn;
var taskTxt;
var taskListHTML;
var tasksList = [];
// load della pagina lancia la funzione init
window.addEventListener("load", init);

// definisco funzione init dove aggancio le variabili html
function init() {
    addBtn = document.querySelector("#add_btn");
    taskTxt = document.querySelector("#task_txt");
    taskListHTML = document.querySelector("#tasks_list_html");

    checkData();
    eventHandlers();
}

function eventHandlers() {
    addBtn.addEventListener("click", addTask);
}

function addTask() {
    tasksList.push(taskTxt.value);

    buildList();
    saveData();
    clearForms();
}
// local storage
function checkData(){
    if (localStorage.getItem ('task'));
    {
        const myArray = tasksList.split(" ");
    }
    buildList();
}

function buildList() {
    var list = "";    // pulisco stringa
    for (var i = 0; i < tasksList.length; i++) {
        list += "<li class='list-group-item'>" + tasksList[i] + "<span class='badge rounded-pill bg-danger float-end' onclick='removeTask("+i+")'>x</span></li>";
    }
    taskListHTML.innerHTML = list
}
function saveData() {
    localStorage.setItem('task', myArray)
}

function clearForms() {
    taskTxt.value = '';
}

function removeTask(id) {
    tasksList.splice(id, 1)

    saveData();
    buildList()
}