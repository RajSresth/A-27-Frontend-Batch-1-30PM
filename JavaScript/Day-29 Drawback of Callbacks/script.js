/**
 * ! Drawback of Callbacks:-
 * 1. Callback Hell
 * 2. Inversion of Control
 */

/**

function findMovie(cb)
{
        console.log("Operation-1");
        setTimeout(function A()
                    {
                        // Make an API Request
                            const d1="war-2";
                            cb(d1)  // !Another Function call statement
                    }, 10000);        
}

function findActor(req,cb){
        console.log(`we are fetching your data from the server`);
        console.log(`Who is lead male character in ${req} movie`);

        setTimeout(function B(){
                    // Make an API Call
                    const actor="Hrithik Roshan";
                    cb(actor);
        }, 1000);
}

function findVillain(cb)
{
     console.log(`we are fetching your data from the server`);

     setTimeout(function C(){
        // Make an API Call
                const villain="Jr NTR";
                cb(villain)
     }, 1000);
}

* ! Pyramid of doom

findMovie(function task1(r1){
    console.log("Response-1:",r1);
        findActor(r1,function task2(hero)
        {
             console.log("Hero Name:",hero);
             findVillain(function task3(villain){
                    console.log("Villain Name:",villain)
             })
        })
               
});
 */

/**
 * ! 2. Inversion of Control
 */

import pay from "./payment.js";

function createOrder(pay)
{
    console.log("Your Order is Cleated");
    console.log("Proceed to payment");
    pay()
    pay()
}

createOrder(pay);
