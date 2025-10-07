import { todo_blueprint, todos_URL } from "../utils/constants.js"
import { getTodos } from "./app.js";


const todos = await getTodos(todos_URL);
console.log("todos:",todos);
 
const y = todos.map(element => {
   const {task} = element;
   return todo_blueprint(task);   // li -- take batch
});

const todolist = document.querySelector(".todolist")
todolist.innerHTML +=y.join(" ");  



