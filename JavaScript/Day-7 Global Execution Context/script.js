console.log("start");
var a=1;
let b=2;
const c=3;
{
    console.log("Inside a Local Block");
    var a=10;
        d=20;
    let c=30;
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
console.log("End");