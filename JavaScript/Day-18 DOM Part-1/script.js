/**
 *  document.body
 *  document.head
 *  document.getElementById()

const body= document.body;
console.log("body:",body)
 */

/**
 * ! document.getElementById("") 
const heading= document.getElementById("title");
heading.textContent="Hello World";
*/

/**
 * ! document.getElementsByClassName("")

const cards= Array.from(document.getElementsByClassName("card"))
cards.map((element,index,array)=>{
    element.style.color="red";
})
 */

/**
 * ! document.getElementsByTagName("")
const divs= Array.from( document.getElementsByTagName("div"))
console.log("divs:",divs);
 */

/**
 * ! document.querySelector("");
 

const heading= document.querySelector("#title")
console.log("heading:",heading);

const card= document.querySelector(".container > :last-child");
console.log("card:",card);
*/

/**
 * ! document.queryselectorAll("");


const cards= document.querySelectorAll(".card");
console.log("cards:",cards);

cards.forEach(task=element => element.style.color="blue");
 */

/**
 * ! Difference between Html Collection vs Nodelist
 

const cardsHtmlCollection= document.getElementsByClassName("card");
const cardsNodeList= document.querySelectorAll(".card");

const c4=document.getElementById("c4");
c4.remove();

console.log("cardsHtmlCollection:",cardsHtmlCollection)
console.log("cardsNodeList:",cardsNodeList);
*/
