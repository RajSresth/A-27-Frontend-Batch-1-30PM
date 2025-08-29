/**
 * ! insertAdjacentElement(position in string, element)
 * todo:- 
 *        i) beforebegin
 *       ii) afterbegin :- first child
 *      iii) beforeend :- last child
 *       iv) afterend


const div=document.getElementById("root");

const p1=document.createElement("p");
p1.textContent="Paragraph Tag-1";

const p3=document.createElement("p");
p3.textContent="Paragraph Tag-3";

div.insertAdjacentElement("afterbegin",p1);
div.insertAdjacentElement("beforeend",p3);


const t1=document.createElement("h2");
const t2=document.createElement("h2");

t1.textContent="Start";
t2.textContent="End";

div.insertAdjacentElement("beforebegin",t1);
div.insertAdjacentElement("afterend",t2);
 */

/**
 * ! setAttribute("attribute name", "attribute value")
 * ! getAttribute("attribute name")
 * ! removeAttribute("attribute name")

const div= document.querySelector("div");
const x= div.getAttribute("class");
div.setAttribute("class",`${x} item-center text-2xl`);
div.removeAttribute("id");
 */

/**
 * ! innerHTML
 * ! outerHTML
 * ! innerText
 * ! textContent


const div= document.querySelector("#root");

// div.textContent="Hello World";

div.outerHTML=`<main id="test">
                    <h1>Hello World</h1>
                </main>`;
 */

/**
 * ! Traversing Element
 */
const div= document.querySelector("#root");

// console.log(div.parentElement)

// console.log(div)
// console.log(div.children)  //3
// console.log(div.childNodes)  //7 next line

console.log(div.firstElementChild.nextElementSibling);
console.log(div.lastElementChild.previousElementSibling);

/**
 * ! remove()
 * ! removeChild()
 */


// div.children[2].remove()
const p2= document.querySelector("#root :nth-of-type(2)");


div.removeChild(p2.nextElementSibling);
// div.remove()
