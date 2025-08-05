console.log("Script File-5");




const p1=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved-1");
    }, 5000);
})

const p2=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved-2");
    }, 10000);
})

async function handlePromises() {
    try {
        const result1 = await p1;
        console.log(result1);
        
        const result2 = await p2;
        console.log(result2);
    } catch (error) {
        console.error("Error:", error);
    }
}


handlePromises()
console.log("End of Script File-5");