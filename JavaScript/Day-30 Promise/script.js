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
 */

const p1= new Promise((resolve,reject) =>{
                   setTimeout(() => {
                                    reject("Promise pura nhi hua..");
                                    // resolve("Chombu")
                              }, 5000);           
            });


p1
.then(
      function success1(val)
      {
            val= val + "Singh";
            return val;
      },
      function error1(reason)
      {
            console.log(reason);
            // throw new Error("Something went wrong..");
          
            const p2= new Promise((resolve,reject) =>{
                 setTimeout(() => {
                         reject("Promise firse pura nahi hua..")
                 }, 5000);
            })
            return p2
      }
)           
.then(
      function success2(fullname)
      {
            console.log(fullname)
      },
      function error2(reason)
      {
            console.log(reason)
      }
)
.catch(function globalError(err){
      console.log(err.message)
})



