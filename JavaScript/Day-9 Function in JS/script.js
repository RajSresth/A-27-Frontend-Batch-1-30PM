/**
 * ! 1. Function Declaration Statement


function sum(a,b)  // Parameters
{
    console.log("Sum:",a + b);
}


sum(10,10)  // Arguments
console.log(sum);
 */

/**
 * ! Example-1
 
console.log("start")
function greet(user)
{
    console.log(`GM ${user}`);
}

const x=greet("Raj");
console.log("x:",x);
console.log("end");
*/

/**
 * ! Example-2


console.log("start");

function sum(a,b)
{
    const total=a + b;
    console.log("Total is:",total);
    return total;
}

const x=sum(10,10);
console.log("x:",x);
console.log("end");
 */

/**
 * ! Example-3

console.log("Start");
const a=10;

greet("Aman");

function greet(user)
{
    console.log(`Namaste ${user}`);
    console.log(a); // 10
}

console.log(greet)
console.log("end") */

/**
 * ! Default Parameter


function dialogue(user="Chombu")
{
    console.log(`Hey ${user}`);
}

dialogue("Raj");
 */