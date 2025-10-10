// import about from "./about.js";
// import {sum , logic} from "./logic.js";

const aboutButton = document.querySelector(".about");
const logicButton = document.querySelector(".logic");

aboutButton.addEventListener("click" , async ( ) =>{
   const obj = await import("./about.js");
  const about = obj.default;
  about();
})

logicButton.addEventListener("click" ,async ( ) =>{
// Load Logic file in browser
    const {sum , logic} = await import("./logic.js")
    const x = sum();
    console.log("x:",x);
    logic();
});


