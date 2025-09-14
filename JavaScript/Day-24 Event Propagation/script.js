const section= document.querySelector("section");
const article= document.querySelector("article");
const div= document.querySelector("div");

section.addEventListener("click", (e)=>{
   
    console.log("Section Capturing..",e.target)
}, true)

article.addEventListener("click", (e)=>{
     
    console.log("Article Clicked..",e.target)
}, true)

div.addEventListener("click", (e)=>{
    e.stopImmediatePropagation()
    console.log("Div Clicked Capturing-1",e.target);
}, true);

div.addEventListener("click", (e)=>{
    console.log("Div Clicked Capturing-2",e.target);
}, true);
