const section= document.querySelector("section");

const divs=document.querySelectorAll("div");

section.addEventListener("click",(event)=>{
    // console.log(event.target.parentElement,"clicked..")
    
    console.log("Section clicked..")
},{
    capture:true,
    once:true,
    passive:true
});


divs.forEach((div,index )=> {
    div.addEventListener("click",(event) =>{
        console.log(`Div Clicked ${index + 1}`);
    },{
        capture: true,
       
    })
});

// option :- {}