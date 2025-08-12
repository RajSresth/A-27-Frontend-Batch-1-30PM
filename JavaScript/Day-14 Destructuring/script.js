

/**
 * ! Object Destructuring


const obj={
    username:"Tinku",
    age:22,
    city:"Noida"
}

const {username,age,city}= obj

console.log(username)
console.log(age)
console.log(city)
 */

/**
 * ! Array Destructuring

const movies=["welcome","housefull","dhamaal","php","dhol"];

const [movie1, , , , m5]=movies;

console.log(movie1)
console.log(m5)
 */

/**
 * ! Nested Object Destructuring
 
const obj={
    username:"Chombu",
    address:{
        state:"UP",
        pin:201301
    }
}

const {username, address:{state, pin}} = obj;

console.log(username)
console.log(state)
console.log(pin)
*/

/**
 * ! Nested Array Destructuring

const arr=[
            ["Html","css"],
            ["Js","Ts"],
            ["Node","Java"],
            ["Mongo","Sql"]
        ];

const [ui, logic, [b1,b2]=backend, db] = arr;

// const [b1 , b2]=backend;
console.log(b1)
console.log(b2)
 */

/**
 * ! Mixed array destructuring
 * 
 



 * ! Aam Zindagi
 * const x= users.map((element, index, array)=>{
    
    const {fname, lname} =element;

    return {    fname:fname.trim(), // Golu
                lname:lname.trim() // Verma
            }
})


const users=[ 
                { fname:"Chombu    ", lname:"   singh" } ,
                { fname:"  Tinku    ", lname:"   sharma  " },
                { fname:"  Golu", lname:"Verma   "}
            ]

users.forEach(({fname, lname},index,array)=>{

    const firstName=fname.trim()
    const lastName=lname.trim()
    array[index]={firstName, lastName}
    
})

console.log("users:",users)
*/


import  {add , greet, user} from "./logic.js";

console.log(  greet(user))