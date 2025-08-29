/**
 * ! document.createElement()
 * ! appendChild():- Add element as their last child
 * ! append()


const heading=document.createElement("h1");
heading.textContent="Hello World";
// heading.style.color="white";
// heading.style.fontSize="55px";
// heading.style.padding="20px";
// heading.style.backgroundColor="red";

// const ui=`color:white;
//         font-size:55px;
//         padding:20px;
//         background-color:red;`

// heading.style.cssText= ui;
const body=document.body;
body.appendChild(heading);
 */
/**
 * ! Internal CSS

const style=document.createElement('style') ;

style.textContent=`h1{
                        color:white;
                        font-size:55px;
                        padding:20px;
                        background-color:black;
                    }`;

const head=document.head;
head.appendChild(style);
 */

/**
 * ! External CSS
 * DOM  => HTML Tree
 * CSSOM => CSS Tree
 */
/**
 * const link= document.createElement("link");

    link.rel="stylesheet";
    link.href="style.css";

    const head=document.head;
    head.appendChild(link);



const sheet1=document.styleSheets[0];

sheet1.insertRule(`h1{
                        background-color:purple;
                        color:white;
                        padding:20px;
                        font-size:55px}`, sheet1.cssRules.length);
 */


/**
 * ! append()


const body=document.body;
const h1=document.createElement("h1");
h1.textContent="Hello World";
const c1= document.createComment("This is for testing purpose")
body.append(h1,c1,"Bla bla bla")
 */

/**
 * ! Fragment
 * ! document.createDocumentFragment()
 */

const t1= performance.now()
const body=document.body;

for(let i=1;i<=5;i++)
{
    const p=document.createElement("p");
    p.textContent=`Paragraph Tag-${i}`;
    body.append(p);
}
    
const t2= performance.now()
console.log("time taken:", t2 - t1)


// Second way
const body2=document.body;
const t3= performance.now();

const fragment=document.createDocumentFragment()  //  <></>
for(let i=1;i<=5;i++)
{
    const p=document.createElement("p");
    p.textContent=`Paragraph Tag-${i}`;
    fragment.append(p);
}

body.append(fragment);
const t4= performance.now()
console.log("time taken:", t4 - t3);





