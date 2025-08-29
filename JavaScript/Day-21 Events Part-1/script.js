

/**
 * ! 2nd way
 * const button=document.querySelector("button");
button.onclick=changeText;
function changeText()
{
    const h1=document.querySelector("h1");
    h1.textContent="Namaste Duniya";
}
 */

/**
 * ! 3rd way
 * ! addEventListener(event name, callback function)
 */

const lightBtn=document.querySelector("#light");
const darkBtn=document.querySelector("#dark");

lightBtn.addEventListener("click",
    function ligthMode()
    {
        const link= document.querySelector("link");
        link.href="light.css";    
    }
);

darkBtn.addEventListener("click",
    function darkMode()
    {
        const link= document.querySelector("link");
        link.href="dark.css";   
    }
);