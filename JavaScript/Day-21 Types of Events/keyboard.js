/**
 * ! keydown
 * ! keyup
 * ! keypress
 */

window.addEventListener("keydown",function darkMode(event){
    
    if(event.ctrlKey && event.key === "d"){
        event.preventDefault();
        const body=document.body;
        body.style.cssText="background:black;color:white;"
    }
})

window.addEventListener("keyup", function lightMode(event){
        
      if(event.ctrlKey && event.key === "d"){
        event.preventDefault();
        const body=document.body;
        body.style.cssText="background:white;color:black;"
    }  
});

window.addEventListener("keydown", function(e){
    e.preventDefault()
    console.log(e.ctrlKey)
   console.log(e)
})