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
 */


btn.addEventListener("click", () => {
    div.classList.add("gradient");
})