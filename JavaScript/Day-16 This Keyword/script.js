/** 
* ! This keword inside global scope
console.log("this:",this); -----> window
*/


/**
 * ! This keword inside a block

var a=10;

{
    let b="block";
    console.log("this:",this) -----> window
}
*/

/**
 * ! this keyword inside named function
function greet()
{
    console.log("Good Morning Developer..!");
    console.log("this:",this);  -----> window
}
greet();
 */

/**
 * ! this keyword inside arrow function
console.log("this:",this)
const greet= () =>
{
    console.log("Namaste Developers..!")
    console.log("this:",this) -------> window (Inherited from its parent)
}

greet()
 */


/**
 * ! this keyword inside a named method
const obj={
    fname:"Tinku",
    lname:"Singh",

    info:function info(){
        console.log("this in info:",this);  ----> obj
    }
}

obj.info()
 */

/**
 * ! this keyword inside arrow method
 */

const obj={
    fname:"Tinku",
    lname:"Singh",

    info:() => {
        console.log("this in arrow fun info:",obj);
    }
}

obj.info();
