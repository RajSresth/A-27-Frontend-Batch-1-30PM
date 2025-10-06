
// Backend URL(Backend Endpoints)
const Users_URL = "http://localhost:3000/users";
const Courses_URL = "http://localhost:3000/courses";
const Instructors_URL = "http://localhost:3000/instructor";

const getUsers = async () => 
                {
                    try{
                            const response = await  fetch(Users_URL , { method : "GET"});  // status:200 ok: true

                            if(!response.ok)  // false
                            {
                                throw new Error("Something went wrong..");
                           }
                           const users = await response.json();
                           return users;
                       }catch(err)
                       {
                           console.log(err.name);
                           console.log(err.message);
                       }
                   };
                                

const getCourses = async () => {
        try {
            const response = await fetch(Courses_URL , {method:"GET"});  // Network Request:- status:200 ok:true

            if(!response.ok)  // false
            {
                throw new Error("Something went wrong..");
            }
            const courses = await response.json();
            return courses;
        } catch (err) {
                    console.log(err.name);
                    console.log(err.message);                   
        }    
};


const getInstructors = async () =>{
    
        const response = await fetch(Instructors_URL , { method:"GET" });  // Network Request:- status: 404 ok: false

        if(!response.ok)  // true
        {
            throw new Error("Something went wrong..");
        }
        const instructors = await response.json();
        return instructors;
    
};


// const x = Promise.all([ getUsers(), getCourses(), getInstructors() ]);
const x = Promise.allSettled([ getUsers(), getCourses(), getInstructors() ]);

console.log("x:",x);