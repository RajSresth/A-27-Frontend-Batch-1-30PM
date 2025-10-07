
// post request  -----> create/ upload/ add

export const createTodo = async (url,obj) => {
    try {
        const response = await fetch(url,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
                        },
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
        return todos;
    } catch (error) {
        console.log("Error Name:",error.name);
        console.log("Error Message:",error.message);
    }
}