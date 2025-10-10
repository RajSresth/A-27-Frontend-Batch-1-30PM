import {   deleteTodo, editTodo, getSingleTodo, getTodos, updateTodo } from "../Logic/app";

export const todos_URL = "http://localhost:3000/todos";

export const todoBlueprint = (id,task,completed) =>{
                return (`<li data-id="${id}" class="${completed ? "done": ""}"> 
                            <span class="left">
                                <input type="checkbox" class="todo-checkbox" ${completed ? "checked" :""}>
                                <span class="todoTitle">${task}</span>
                            </span>
                            <span>
                                <button type="button"  class="editBtn" data-id="${id}"> 
                                     <i class="fa-regular fa-pen-to-square"></i>
                                </button>

                                <button type="button" class="deleteBtn"  data-id="${id}">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </span>
                        </li>`)
};




export const renderUI = (todos) => {
    
    const todolist = document.querySelector(".todolist");
    todolist.innerHTML= todos.map(({id,task,completed}) => {
        return todoBlueprint(id,task,completed);   // li -- take batch
        }).join(" ");    


    // Delete Button Logic 
    const deletButtons = document.querySelectorAll(".deleteBtn");
    deletButtons.forEach(btn =>{
        btn.addEventListener("click" , async (e) =>{
            const id = e.target.closest(".deleteBtn").dataset.id;

            await deleteTodo(todos_URL , id);
            await getTodos(todos_URL);
        })
    });


    // Edit Button Logic
    const editButtons = document.querySelectorAll(".editBtn");
    editButtons.forEach(btn => {
        btn.addEventListener("click" ,async (e) =>{
            const id = e.target.closest(".editBtn").dataset.id;
            const oldTodo= await getSingleTodo(`${todos_URL}/${id}`);
            console.log("result: ",oldTodo);
            
            const newTask = prompt("Enter new task",oldTodo.task);
            if(!newTask || !newTask.trim())
            {
                alert("Please enter valid todo task");
                return;
            }

            const newTodo = {               
                ...oldTodo,
                task:newTask
            }
           await editTodo(`${todos_URL}/${id}`,newTodo);
           await getTodos(todos_URL);
        })


           


    })


    // Checkbox Logic
        const checkboxes = document.querySelectorAll(".todo-checkbox");
        checkboxes.forEach(cb => {
            cb.addEventListener("change" , async (e) => {
                const li = e.target.closest("li")
                const todoId = li.dataset.id;
                console.log("todoId:",todoId);
                const isChechked = cb.checked;
              
                await updateTodo(`${todos_URL}/${todoId}`,{completed:isChechked});
                await getTodos(todos_URL);
               
                // if(isChechked) li.classList.add("done");
                // else li.classList.remove("done");

            })
        })

}


