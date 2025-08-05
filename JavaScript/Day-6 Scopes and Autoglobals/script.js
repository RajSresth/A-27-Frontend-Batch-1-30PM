/**
 * ! Example-1
 
var a=1;
let b=2;
const c=3;

{
    console.log("Inside a Local Block");
    var a=10;
    let b=20;
    const c=30;
    var d=40;
    console.log("a:",a);
    console.log("b:",b);
    console.log("c:",c);
    console.log("d:",d);
}
console.log("Outside a Local Block");
console.log("a:",a);
console.log("b:",b);
console.log("c:",c);
console.log("d:",d);
*/

/**
 * ! Example-2


var a=1;
let b=2;
const c=3;

{
    console.log("Inside a Local Block");
    a=10;
    b=20;
    d=40;  // Autoglobal:- WHen declaration part is not there
    console.log("a:",a);  // 10
    console.log("b:",b);  //  20
    console.log("c:",c);  // 3
    console.log("d:",d);  // 40
}
console.log("Outside a Local Block");
console.log("a:",a);  //10
console.log("b:",b);  //20
console.log("c:",c);  //3
console.log("d:",d); // 40
 */

/**
 * ! Example-3
 */

var a=1;

{
    console.log("Inside a Local Block");
    a=10;
    b=20;  // Autoglobal
    c=30;  // Temporal Dead Zone
    console.log("a:",a);  //10
    console.log("b:",b);  //20
    console.log("c:",c);  //30
}

console.log("Outside a Local Block")
let c=2;
console.log("a:",a);  //10
console.log("b:",b);  //20
console.log("c:",c);  //2
