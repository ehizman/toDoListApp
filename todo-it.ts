console.log("TodoIt");
const todoList : Array<string> = [];
console.log("Current todo list: ", todoList);
const todoInput : HTMLInputElement = document.getElementById("todoInput") as HTMLInputElement;

function addTodo(): void{
          if (todoInput === null){
                    console.error("The todo inout is missing from the page!");
                    return;
          }
          const newTodo: string = todoInput.value; 
          if ('' !== newTodo.trim()){
                    console.log("Adding todo: ",newTodo);

                    todoList.push(newTodo);
                    console.log('Newtodo list: ', todoList);

                    todoInput.value = "";
                    todoList.sort();
                    updateTodoList();
          }
}
const todoListDiv : HTMLDivElement = 
document.getElementById("todoListContainer") as HTMLDivElement;

function updateTodoList(): void{
          console.log("Updating the rendered todo list");
          todoListDiv.innerHTML = "";
          todoListDiv.textContent = "";

          const ul = document.createElement("ul");
          ul.setAttribute("id", "todoList");
          todoListDiv.appendChild(ul);

          todoList.forEach(item =>{
                    const li = document.createElement("li");
                    li.setAttribute("class", "todo-list-item");
                    li.innerText = item;
                    ul.appendChild(li)
          } );
}

