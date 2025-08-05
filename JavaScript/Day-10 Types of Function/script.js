/**
 * ! 1. Function Declaration Statement
 

function greet(user)
{
    console.log(user)
}

greet()*/

/**
 * ! 2. First class Function, Function as Expression

const greet=function fun(user)
            {
                console.log("Username:",user);
                return 10;
            }

greet()
 */

/**
 * ! 3. Immediately Invoked Function Expression (IIFE)
 * Todo:- It runs only one time


(function greet(user){
    console.log(`Namaste ${user}`);
})("Aditya");


const res=(function (){
            console.log("Hahahahah..");
            return `Tu Samajha..!`
})();

console.log("res:",res);
*/

/**
 * ! 4. Arrow Function (=>)Fat Operator
 * Todo: It is added in ES6,
 * Todo: This keyword is not inside arrow function
 

// Implict Return type arrow function
const greet1 = (user) => console.log(`GM ${user}`);

// Explicit Return type arrow function
const greet2 = (user) => {
            console.log(`Namaste ${user}`);
            return "Dinga" 
};
*/
/**
 * ! Implicit Examples
 
const sum=(a,b)=>console.log(a + b);
const task=(a,b)=> sum(a,b);
const x=task(10,10);
console.log("x:",x)
*/

/**
 * ! Explicit Return Type arrow function
 

const findPower=(a,b)=>{
    const pow=a**b;
    console.log(`${a} ^ ${b} is: ${pow}`);
    return pow;
}

const x=findPower(5,2);
console.log("x:",x)


const sum=(a,b)=> a + b;

const y=sum(10,10)
console.log("y:",y)
*/

/**
 * ! Functional Programing
 * ! Object Oriented Programming
 */

/** HOF:- The function which accepts another function as a parameter.

CBF:- The function which is passed to another function as an argument.

function calculator(a,task,b)
{
    console.log("Start");

    const x=task(a,b);
    console.log("x:",x);

    console.log("End");
}

calculator(10, sum=(a,b)=> a + b, 20)
 */

/**
 * ! HOF:- The function which returns another function
 * ! CBF:- THe function which is returned by another function


function outer()
{
    console.log("Inside outer outer function");

    // Call back function
    const inner=()=>{
        console.log("Inside Inner Function")
    }

    return inner;
}

const x=outer();
console.log("x:",x);
   */

function parent()
{
     console.log("parent function");

     const locker="10cr";

     const child=()=>{
        console.log("Inside Child Function")
        console.log(locker)
     }

     return child;
}

const x=parent();
console.log("x:",x)
x()