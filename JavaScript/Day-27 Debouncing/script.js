const button=document.querySelector("button");
const countSpan=document.querySelector("#count");
const requestSpan=document.querySelector("#request");

let count=0;
let request=0;

/**
 *! polyfill of Debouncing
function myDebounced(cb,d)
{
    let timer;
    let inner= (...args) => {
                    clearTimeout(timer);
                    timer=setTimeout(B=() => {
                            cb(...args)
                    },d);
                }

    return inner;
}

let debounced= myDebounced(() =>{
    requestSpan.innerHTML= ++request;
}, 800)

*/

let debounced=_.debounce(()=>{
    requestSpan.innerHTML=++request;
}, 2000);

button.addEventListener("click", function A(){
    countSpan.innerHTML= ++count;
    debounced();    
});


