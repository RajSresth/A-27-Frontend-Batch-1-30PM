/**
 * ! Example-1
 
        b=20;
    let b=200;
    console.log(b);
*/

/**
 * ! Example-2
 */
console.log("start")
var a=10;
let b=2;
{
    console.log("Inside a Local Block");
      b=20;
      c=30;  // Reference Error can't access c before initialization
    console.log("a:",a)
    console.log("b:",b)
}
let c=3;
console.log("Outside a Local Block");
console.log("a:",a);
console.log("b:",b);
console.log("end");