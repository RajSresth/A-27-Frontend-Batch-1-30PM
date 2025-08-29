const button= document.querySelector("button");
const body=document.body;

button.addEventListener("mousedown",function (){
    body.style.background="red";
})

button.addEventListener("mouseup", function(){
    body.style.background="white";
})






/**
 * ! click
 * ! dblclick
 * ! mouseover / mouseenter
 * ! mouseout / mouseleave
 * ! mousemove
 * ! contextmenu:- For right click
 * ! mousedown
 * ! mouseup
 * ! wheel
 */

/**
 * button.addEventListener("mouseover", function(){
   const body=document.body;
   body.style.background="black";
});

button.addEventListener("mouseout", function(){
     const body=document.body;
   body.style.background="white";
})

const body=document.body;

body.addEventListener("contextmenu", function(e){
    e.preventDefault();
   console.log("Right Clicked...")
});


body.addEventListener("wheel",function(e){
    console.log(e)
})

 */