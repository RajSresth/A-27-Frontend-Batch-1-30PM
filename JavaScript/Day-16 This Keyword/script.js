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


const obj={
    fname:"Tinku",
    lname:"Singh",

    info:() => {
        console.log("this in arrow fun info:",this); ------> window
    }
}

obj.info();
 */

/**
 * ! this keyword inside nested named function method
 
const obj={
    fname:"Tinku",
    lname:"Singh",

    outer:function outer()
            {
                console.log("Outer:", this);   // -------> obj{}

                function inner()
                {
                        console.log("Inner:",this);  // --------> window{}
                } 

                inner()
            }
   
}

obj.outer();
*/

/**
 * ! this keyword inside nested methods, outermost is named function and nested methods are arrow function

const obj={
    fname:"Tinku",
    lname:"Singh",

    outer:function outer()
            {
                console.log("Outer:", this);   // -------> obj{}

                const inner1= () => {
                        console.log("Inner1 this:",this);  // --------> obj{}

                        const inner2=() =>{
                             console.log("Inner2 this:",this); // --------> obj{}
                        }

                        inner2();
                }                

                inner1();
            }
   
}

obj.outer();
 */

/**
 * ! this keyword inside nested object method


const obj={
     fname:"Tinku",
    lname:"Singh",

    address:{
            Country:"India",
            state:"UP",
            pin:201301,

            info:() => {
                    console.log("Info this:",this)
            }
    }
}

obj.address.info();
 */

/**
 * ! this keyword inside forEach, map, filter, some, every


const userName="Shresth";
let arr=[10,20];

arr.filter(function (element, index, array)
 {
    console.log("task1 this:", this); // ----> 
});
 */

/**
 * ! this keyword inside add event listener
 * if named function :- element
 * if arrow function :- window
 
const btn=document.getElementById("dark");

btn.addEventListener("click",  darkMode=() =>{
    document.body.cssText="background-color:black;";

    console.log("this:",this)
})


Btn.addEventListener()
*/

/**
 * ! this keyword with the help of closure
 */
const u2={
    username: "Sid",
    designation:"Backend",
    outer:function outer()
        {
            console.log("Outer:",this);  // Sid u2 object
            const inner=() =>
            {
                console.log("inner:",this);  
            }                
            return inner;
        }
}
const res= u2.outer()
res()








