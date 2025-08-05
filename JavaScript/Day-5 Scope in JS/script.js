/**
 * ! Scope:- Scope defines the visibility and accessibility of a code.
 * 
 * ! Types of Scope:- 2 types
 *  1. Global Scope:-
 *          The variable declared in global scope can be accessed anywhere in the program.
 *  2. Local Scope:-
 *          The variable declared in local scope can be accessed in that block only i.e. we can not access the variable from outside.
 *          Block Scope
 *          Function Scope
 *          Script Scope
 * 
 */

/**
 * ! Example-1
 
var a=10;
let b=20;
const c=30;

console.log("a:",a);
console.log("b:",b);
console.log("c:",c);
*/

/**
 * ! Example-2
 */
var a=1;
let b=2;
const c=3;

{
    console.log("Inside a Local Block");
    var a=10;
    // let b=20;
    // const c=30;
    console.log("a:",a);
    console.log("b:",b);
    console.log("c:",c);
}

console.log("Outside a Local Block");
console.log("a:",a);
console.log("b:",b);
console.log("c:",c);