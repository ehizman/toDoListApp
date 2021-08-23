console.log("TodoIt");
var todoList = [];
console.log("Current todo list: ", todoList);
var todoInput = document.getElementById("todoInput");
function addTodo() {
    if (todoInput === null) {
        console.error("The todo inout is missing from the page!");
        return;
    }
    var newTodo = todoInput.value;
    if ('' !== newTodo.trim()) {
        console.log("Adding todo: ", newTodo);
        todoList.push(newTodo);
        console.log('Newtodo list: ', todoList);
        todoInput.value = "";
        todoList.sort();
        updateTodoList();
    }
}
var todoListDiv = document.getElementById("todoListContainer");
function updateTodoList() {
    console.log("Updating the rendered todo list");
    todoListDiv.innerHTML = "";
    todoListDiv.textContent = "";
    var ul = document.createElement("ul");
    ul.setAttribute("id", "todoList");
    todoListDiv.appendChild(ul);
    todoList.forEach(function (item) {
        var li = document.createElement("li");
        li.setAttribute("class", "todo-list-item");
        li.innerText = item;
        ul.appendChild(li);
    });
}
