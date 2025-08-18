import {obj, employee} from "./rest.js";
import company from "./spread.js";
import personal from "./sum.js"

// const [e1, ...extra]=employee;
// console.log(extra)

personal.gender="Male";
console.log(personal);

const user= { 
                username:"Satyam",
                skills:["React","Node","Express","Mongo"],
                city:"Noida",
                
                ...personal,
                ...company
            }



console.log("user:",user)