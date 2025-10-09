import { todos_URL } from "../utils/constants.js"
import { createTodo, deleteTodo, getTodos } from "./app.js";

// Dom Selectors

const input = document.getElementById("input");
const addButton = document.getElementById("addBtn");

// create Todo
addButton.addEventListener("click",async () => {
   addButton.disabled = true;
   const task = input.value.trim();

   if (!task) {
      alert("Please enter a valid task!");
      addButton.disabled = false;
      return;
   }
   const newTodo ={
      task,
      complete:false
   }

   try{
         await createTodo(todos_URL , newTodo);   // POST Network Request ---> 201
         await getTodos(todos_URL);               //  GET Network Request  ---> 200
   }   
   catch(err)
   {
         console.error("Error creating todo:", err);
         alert("Something went wrong! Try again.");
   }
   finally{
      addButton.disabled= false;
      input.value="";
   }

});


input.addEventListener("keydown",async (e) => {
   if(e.key === "Enter")
   {
      addButton.disabled = true;
      const task = input.value.trim();

         if (!task) {
            alert("Please enter a valid task!");
            addButton.disabled = false;
            return;
         }
         const newTodo ={
            task,
            complete:false
         }

         try{
               await createTodo(todos_URL , newTodo);   // POST Network Request ---> 201
               await getTodos(todos_URL);               //  GET Network Request  ---> 200
         }   
         catch(err)
         {
               console.error("Error creating todo:", err);
               alert("Something went wrong! Try again.");
         }
         finally{
            addButton.disabled= false;
            input.value="";
         }
   }

})

getTodos(todos_URL);

 

