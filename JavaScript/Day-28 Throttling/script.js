const button=document.querySelector("button");
const countSpan=document.querySelector("#count");
const requestSpan=document.querySelector("#request");

let count=0;
let request=0;

/**
 * ! Polyfill for Throtling
// HOF return inner function
function myThrottle(cb, d)
{
    let prev=0;

    let inner=function inner(...args){  
                    let now=Date.now();

                    if(now - prev < d){
                        return
                    }
                    prev=now;
                    // cb.apply(this,args)
                    cb()
                }
    return inner;
}


// throttle received inner function
const throttle= myThrottle(() =>{
    requestSpan.innerHTML=++request;
}, 1000);
 */

/**
 * ! throttling with lodash
 */

const throttle = _.throttle(() =>{
                                    requestSpan.innerHTML=++request;
                                }, 1000);

button.addEventListener("click",()=>{
    countSpan.innerHTML=++count;
    throttle()
});