/**
 * ! Aam Zindagi
const inp1=document.getElementById("inp1");
const inp2=document.getElementById("inp2");
const inp3=document.getElementById("inp3");


inp1.addEventListener("input", function (){
    console.log(inp1.value);
});

inp2.addEventListener("change", function (){
    console.log(inp2.value);
});

inp3.addEventListener("change", function (){
    console.log(inp3.value);
});
 */

/**
 * ! Mentos Zindagi

const inputs = document.querySelectorAll("input");
// inputs= [ input1, input2, input3]


inputs.forEach((element) =>{
        element.addEventListener("change", function (){
        console.log(element.value);
    })  
})
 */

/**
 * ! submit
 * ! reset
 */

const form = document.querySelector("form");

form.addEventListener("submit", function (event){
    event.preventDefault();
    const usernameInput= document.getElementById("inp1");
    const emailInput=document.getElementById("inp2");
    const passwordInput= document.getElementById("inp3");

    console.log(usernameInput.value);
    console.log(emailInput.value);
    console.log(passwordInput.value);


    form.reset();
})