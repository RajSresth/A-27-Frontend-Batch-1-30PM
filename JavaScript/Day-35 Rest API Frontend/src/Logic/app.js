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

        const todos = await response.json();
        renderUI(todos);
    } catch (error) {
        console.log("Error Name:",error.name);
        console.log("Error Message:",error.message);
    }
}


// Update request  ----> PUT

export const editTodo = async (url,obj) => {
     try {
        const response = await fetch(url,{
                                            method:"PUT",
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

// Partial Update request  ----> PATCH
export const updateTodo = async (url,obj) => {
     try {
        const response = await fetch(url,{
                                            method:"PATCH",
                                            headers:{ 'Content-Type': 'application/json'},
                                            body:JSON.stringify(obj)
                                        });                      
                        
                        
            if(!response.ok)
            {
                throw new Error("Failed to Upload..!");        
            }
            const data = await response.json();
            console.log(data);
    } catch (error) 
    {
         console.log("Error Name:",error.name);
         console.log("Error Message:",error.message);
    }
}


// delete request  ----> delete

export const deleteTodo = async (url,id) =>{
        try {
                const response = await fetch(`${url}/${id}`,{
                    method:"DELETE"
                })

                if(!response.ok)
                {
                    throw new Error("Failed to delete todo");
                }
                const data = await response.json()
                console.log("data: ",data);
        } catch (error) {
            console.log("Error Name: ",error.name);
            console.log("Error Message: ",error.message);
        }
}



// getSingleTodo
export const getSingleTodo = async (url) =>{
    try {
        const response = await fetch(url , {method:"GET"});

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

