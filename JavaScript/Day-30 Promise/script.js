/**
 * ! Promise() constructor


const p1= new Promise(function task(resolve,reject)
                      {
                            setTimeout(A=() => {
                                    resolve("Promise pura hua..");
                            }, 3000);
                      });

console.log("P1:",p1);
 */

/**
 * ! Example-2
 

const p1= new Promise((resolve,reject) =>{
                   setTimeout(() => {
                                    // reject("Promise pura nhi hua..");
                                    resolve("Chombu")
                              }, 5000);           
            });

p1
.then(
      function success1(val)
      {
            console.log("val in then1:",val)
             const p2= new Promise((resolve,reject) =>
                              {                 
                         
                                    setTimeout(() => {
                                          // resolve(val + " Singh");   
                                          reject("Something")
                                    }, 5000);
                              })
            return p2;
      },
      function error1(reason)
      {
            console.log(reason);          
            const p2= new Promise((resolve,reject) =>{                 
                         reject("Promise firse pura nahi hua..");                
            })
            return p2;
      }
)           
.then(
      function success2(fullname)
      {
            console.log("fullname in then2:",fullname);
      },
      function error2(reason)
      {
            console.log(reason);
      }
)
.catch(
      function globalError(err)
      {
            console.log(err.message)
      }
)
*/

import { success1, success2, success3 , error, globalError } from "./app.js";

const pr = new Promise((resolve,reject) =>{
      setTimeout(() => {
            resolve("Promise Successfull")
      }, 2000);
})

pr
.then(success1)
.then(success2)
.then(success3)
.catch(globalError)
.finally(() =>{
      console.log("Greeting of the day..!")
})

