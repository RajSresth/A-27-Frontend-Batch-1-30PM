/**
 * ! document.createElement()
 * ! appendChild():- Add element as their last child
 * ! append()
 */

const heading=document.createElement("h1");
heading.textContent="Namaste Developers..";


const body=document.body;
body.appendChild(heading);

// heading= <h1>Namaste Developers..</h1>