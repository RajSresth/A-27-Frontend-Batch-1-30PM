const btn=document.querySelector("button");
const div= document.querySelector(".container");
const body=document.body;

/**
 * ! Light and Dark Mode
 * ! classList.contains()
 * ! classList.replace()
btn.addEventListener("click", function(){
    const x= btn.classList.contains("light")
    if(x)
    {
        // Apply Dark Mode
        body.classList.replace("light","dark");
        div.classList.replace("light","dark");
        btn.classList.replace("light","dark");
        btn.textContent="Light Mode";
    }
    else{
        // Apply Light Mode
        body.classList.replace("dark","light");
        div.classList.replace("dark","light");
        btn.classList.replace("dark","light");        
        btn.textContent="Dark Mode";
    }
})
 */

/**
 * ! classList.add()
 * ! classList.remove()

btn.addEventListener("click", () => {
    const x = div.classList.contains("gradient");
    if(x){
        div.classList.remove("gradient");
    }
    else{
        div.classList.add("gradient");
    }
}) */

/**
 * ! Most Important Method
 * ! classList.toggle()
btn.addEventListener("click", () => {
    div.classList.toggle("gradient");
})
*/

/**
 * ! classList.forEach()

btn.addEventListener("click", function (){
    div.classList.forEach((element,index)=>{
          div.classList.replace(element, element+1)         
    
    })
})
     */

/**
 * ! classList.entries()
 * ! classList.values()
 * ! classList.keys()
 */

btn.addEventListener("click",() =>{

    const x= Array.from( div.classList.entries());
    const y= Array.from( div.classList.values());
    const z= Array.from(div.classList.keys());
;
    console.log("classList.entries():", x);
    console.log("classList.values():", y);
    console.log("classList.keys():",z);


    // console.log(div.classList.supports("validToken"))
    // console.log(div.classList.item(0))
})