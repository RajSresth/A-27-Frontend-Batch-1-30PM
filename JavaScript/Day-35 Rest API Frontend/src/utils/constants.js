import { deleteTodo, editTodo, getTodos, updateTodoStatus } from "../Logic/app";

export const todos_URL = "http://localhost:3000/todos";

export const todo_blueprint = (id,task,completed) =>{
                return (`<li data-id="${id}" class="${completed ? "completed" : ""}"> 
                            <span>
                            <input type="checkbox" class="todo-checkbox" ${completed ? "checked" : ""}>
                            <span class="todoTitle">${task}</span>
                            </span>
                            <span>
                                <button type="button" data-id="${id}" class="editBtn" > 
                                     <i class="fa-regular fa-pen-to-square"></i>
                                </button>

                                <button type="button" data-id="${id}" class="deleteBtn" >
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </span>
                        </li>`)
};




export const renderUI = (data) => {
    
    const todolist = document.querySelector(".todolist");
    todolist.innerHTML= data.map(({id,task,completed}) => {
        return todo_blueprint(id,task,completed);   // li -- take batch
        }).join(" ");
        
        
    // Delete Button Logic
    const deleteButtons = document.querySelectorAll(".deleteBtn");
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", async (e) => {
                const id =e.target.closest(".deleteBtn").dataset.id;
                console.log("Clicked..",id);
                await deleteTodo(`${todos_URL}/${id}`);
                await getTodos(todos_URL);
        })
    })

    // Edit Button Logic
    const editButtons = document.querySelectorAll(".editBtn");
    editButtons.forEach(btn => {
        btn.addEventListener("click", async (e) => {
                const id = e.target.closest(".editBtn").dataset.id;
                const li=e.target.closest("li");
                const todoTitle = li.querySelector(".todoTitle").textContent;
               
                const userInput = prompt("Enter Something",todoTitle);

                if(!userInput || !userInput.trim())
                {
                    alert("Please Provide Valid name");
                    return
                }
                console.log("Clicked..",id);
                await editTodo(`${todos_URL}/${id}`,{task:userInput});
                await getTodos(todos_URL);
        })
    });


    //  checkbox logic
    document.querySelectorAll(".todo-checkbox").forEach(cb => {
    cb.addEventListener("change", async (e) => {
      const li = e.target.closest("li");
      const id = li.dataset.id;
      const completed = e.target.checked;

      await updateTodoStatus(`${todos_URL}/${id}`, completed);
      await getTodos(todos_URL);
      if (completed) li.classList.add("completed");
      else li.classList.remove("completed");
    });
  });


}