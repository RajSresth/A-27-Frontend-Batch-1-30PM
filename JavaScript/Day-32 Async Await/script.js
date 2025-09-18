/**
 * ! Example-1 of Async Await
*/ 

const p1=new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve("Promise-1")
    }, 5000);
});

const p2=new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve("Promise-2")
    }, 10000);
})

async function getData()
{
    const v1= await  p1;  // 5 Second
    console.log("v1:",v1);

    const v2= await p2; // 5 second + 5 Second
    console.log("v2:",v2);
}

console.log("start")
getData();
console.log("end");


/**
 * ! Example-2
 

function task1()
{
    const p1= new Promise((resolve,reject) =>{
        setTimeout(()=>{
                resolve("Task-1")
        },5000)
    })

    return p1;
}

function task2()
{
    const p2= new Promise((resolve,reject) =>{
        setTimeout(()=>{
                resolve("Task-2")
        },10000)
    })

    return p2;
}


const getData= async () =>{
    const v1= await task1();
    console.log("value-1:",v1);

    const v2= await task2();
    console.log("value-2:",v2);
}


console.log("start");
getData();  // Total 15 Second
console.log("end");
*/