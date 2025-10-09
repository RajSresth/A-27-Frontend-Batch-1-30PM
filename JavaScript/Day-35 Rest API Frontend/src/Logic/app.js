import { renderUI } from './../utils/constants';
// post request  -----> create/ upload/ add

export const createTodo = async (url,obj) => {
    try {
        const response = await fetch(url,{
            method:"POST",
            headers:{ 'Content-Type': 'application/json'},
            body:JSON.stringify(obj)
        });                       
                        
                        
            if(!response.ok)
            {
                throw new Error("Failed to Upload..!");        
            }
            const data = await response.json();
            console.log(data)
    } catch (error) {
         console.log("Error Name:",error.name);
         console.log("Error Message:",error.message);
        }
}

// get request ---> read
export const getTodos = async (url) =>{
    try {
        const response = await fetch(url , {method:"GET"});

        if(!response.ok){
            throw new Error("Something went wrong");
        }

        const data = await response.json();
        renderUI(data);
    } catch (error) {
        console.log("Error Name:",error.name);
        console.log("Error Message:",error.message);
    }
}



// delete todo

export const deleteTodo = async (url) => {
            try {
                const response = await fetch(url , {method:"DELETE"});

                if(!response.ok){
                    throw new Error("Something went wrong");
                }

                const data = await response.json();
               
                return data;
                
            } catch (error) {
                  console.log("Error Name:",error.name);
                  console.log("Error Message:",error.message);
            }
}


// Edit todo
export const editTodo = async (url,obj) => {
            try {
                const response = await fetch(url,{
                                                    method:"PUT",
                                                    headers:{ 'Content-Type': 'application/json'},
                                                    body:JSON.stringify(obj)
                                                }); 

                if(!response.ok){
                    throw new Error("Something went wrong");
                }

                const data = await response.json();               
                return data;
                
            } catch (error) {
                  console.log("Error Name:",error.name);
                  console.log("Error Message:",error.message);
            }
}


// checkbox Logic
export const updateTodoStatus = async (url, completed) => {
  try {
    const res = await fetch(url, {
      method: "PATCH",       // sirf completed field update karni hai
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }) 
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
