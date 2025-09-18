/**
 * ! Promise Methods
const p1= Promise.resolve("Promise Pura Hua");
const p2= Promise.reject("Promise Pura nhi hua")
console.log("p1:",p1);
console.log("p2:",p2);
 */

/**
 * ! Promise.all()
 * ! Promise.allSettled()


const p1=new Promise((resolve,reject) =>{
    setTimeout(() => {
        reject("Promise-1 Reject")
    }, 1000);
})

const p2=new Promise((resolve,reject) =>{
    setTimeout(() => {
        reject("Promise-2 Reject")
    }, 3000);
})

const p3=new Promise((resolve,reject) =>{
    setTimeout(() => {
        reject("Promise-3 Reject")
    }, 2000);
})

// const response= Promise.all([p1, p2, p3])
const x= Promise.allSettled([p1, p2, p3])

// console.log("response:",response)
console.log("x:",x)
 */

/**
 * ! Promise.race()
 * ! Promise.any()
 */


const p1=new Promise((resolve,reject)=>{
        setTimeout(() => {
              reject("Promise-1 Failed")
        }, 1000);
});

const p2=new Promise((resolve,reject)=>{
        setTimeout(() => {
            //   resolve("Promise-2")
            reject("Promise-2 Failed")
        }, 2000);
});

const p3=new Promise((resolve,reject)=>{
        setTimeout(() => {
            //   resolve("Promise-3")
            reject("Promise-3 Failed")
        }, 3000);
});


// const x= Promise.race([p1,p2,p3]);
const x= Promise.any([p1,p2,p3]);


x
.then(
    function success(val)
    {
        console.log("val in then:",val);
    }
    )
.catch(
    function handleError(e)
    {
        console.log(e.errors);
    }
)