export const todos_URL = "http://localhost:3000/todos";


export const todo_blueprint = (task) =>{
    return (`<li> 
                            <span>
                            <input type="checkbox">
                            <span class="todo-title">${task}</span>
                            </span>
                            <span>
                                <button type="button" class="editBtn"> 
                                <i class="fa-regular fa-pen-to-square"></i>
                                </button>

                                <button type="button" class="deleteBtn">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </span>
                        </li>`)
};