const obj={
    username:"Chombu",
    age:24,
    city:"Noida"
}

const products=[
    {
        item:"shirt",
        price:2000
    },
    {
        item:"shoes",
        price:3000
    }    
]

localStorage.setItem("obj",JSON.stringify(obj));
localStorage.setItem("products",JSON.stringify(products));

localStorage.removeItem("data");
localStorage.removeItem("product");

localStorage.clear();
