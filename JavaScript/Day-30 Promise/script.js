/**
 * ! Promise() constructor
 */

const p1= new Promise(function task(resolve,reject)
                      {
                            setTimeout(A=() => {
                                    resolve("Promise pura hua..");
                            }, 3000);
                      });

console.log("P1:",p1);


console.log({}+"")  
                    