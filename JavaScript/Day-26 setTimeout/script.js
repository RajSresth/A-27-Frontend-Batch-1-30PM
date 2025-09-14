

    for(let i=0; i<3;i++)
    {
            setTimeout(A=() => 
            {
                console.log("i:",i);
            }, 1000);

    }


     setTimeout(() => {
       history.pushState({page:"about"},"","/about")
       console.log("Switched to About Page..")
   }, 2000);
