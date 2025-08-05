/**
 * ! Example-1
 * 
const outer=()=>{
    console.log("Inside Outer Function");

    const userId="123";
    const password="abc456";

    const inner=()=>{
        console.log("Inside Inner Function");
        console.log("userId:",userId);
        console.log("Password:",password);
    }

    return inner;
}

const x=outer();




if(typeof(x)=== "function")
{
    x()
}
else{
    console.log("x:",x);    
}*/

/**
 * ! Example-2 Closure-2
 * ! High Memory Consumption


const parent=()=>{
    const a=10;

    const inner1=()=>{
        console.log("Inside Inner1 a:",a)
    }

    const inner2=()=>{
        console.log("Inside Inner2 a:",a);
    }

    return [inner1,inner2]
}

const [x1, x2]=parent()

x1()
x2()
 */

/**
 * ! Example-3 Closure
 

const outer=(m,n)=>{
    console.log("Inside Outer Function..!");
    

    const inner=()=>{
        console.log("Inside Inner Function");
        return m + n;
    }

    return inner;
}

const x1=outer(5,5);
const x2=outer(2,3);

console.log("x1:",x1())
console.log("x2:",x2())
*/

/**
 * ! Example-4

const parent=(a)=>{
    console.log("Inside Parent Function..!");

    const sum=(b)=>{
        console.log("Sum Function..!")
        console.log("a:",a)
        console.log("b:",b)
        return a + b;
    }

    return sum;
}

const x=parent(10)(20)
console.log("x:",x);
 */

/**
 * ! IIFE
(function fun1(){
    console.log("Inside Function-1");

    let count=0;

    return function increment(){
        console.log("Inside Increment Function");
        count++ ;
        console.log("count:",count)
    };

})()();
*/

/**
 * ! Example-6 Last Example of Closure
 */

const x=(function fun1(){
            let count=0;
            return function increment(){
                console.log("Inside Increment Function");
                count++ ;
                console.log("count:",count);                
            };

        })();

x()
x()
x()
x()

