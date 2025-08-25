/**
 *! call() - Aam Zindagi

const u1={
    username: "Ravi",
    designation:"Frontend"
}

const u2={
    username: "Sid",
    designation:"Backend"
}

function details(company,city)
{
    console.log("details:",this);
    console.log("Company:",company)
    console.log("Company location:",city)
}

details.call(u1,"TCS","Noida")
*/ 

/**
 * ! call() Example-2


const u1={
    username: "Ravi",
    designation:"Frontend",
    outer:function outer()
    {
        console.log("Outer:",this);  // Ravi u1 object

            function inner()
            {
                
                console.log("inner:",this);  // Ravi u1 object
            }
        
        inner.call(this)
    }
}
u1.outer();
 */

/**
 * ! call() example-3

const u2={
    username: "Sid",
    designation:"Backend",
    outer:function outer()
        {
            console.log("Outer:",this);  // Sid u2 object
            function inner()
            {
                console.log("inner:",this);  
            }                
            return inner;
        }
}
const res= u2.outer()
res()   //      inner()
 */

/**
 * ! apply() - aam zindagi

const u1={
    username: "Ravi",
    designation:"Frontend"
}

function details(company,city)
{
    console.log("details:",this);
    console.log("Company:",company)
    console.log("Company location:",city)
}

details.apply(u1, ["TCS", "Noida"]);
*/


import res from "./app.js";
res();

