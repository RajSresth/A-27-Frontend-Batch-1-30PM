/**
 * ! Array Method
 * ! Array Inbuild Method



const arr=[
                function fun1(){ console.log("Function-1")},
                function fun2(){ console.log("Function-2")},
                function fun3(){ console.log("Function-3")}                
            ]

    arr[1]()
    console.log(arr)
 */

/**
 * ! Object Method

const user={
    username:"Tinku",
    desg:"Software Developer",
    intro:() => {
        console.log(`I am ${user.username} working as a ${user.desg}`)
        let bag="10cr";

        const inner=()=>{
            console.log("I'm inner function");
            console.log(bag)
        }

        return inner;
    }
}

const x= user.intro();
console.log("x:",x);
x()
 */


/**
 * ! Add a new key value pair, 
 * ! Delete a key value pair(delete keyword)
 * ! Update a value
 * ! in keyword

// obj["state"]="UP";



const obj={
    username:"Tinku",
    age:20,
    deleteKey:"random",
    city:"Noida"
}

obj.city="Delhi";

delete obj.deleteKey
console.log("city" in obj);
console.log(obj)
 */

/**
 * ! Shallow Copy
const jack={ cake:"ice-cream"};
const oggy=jack;
oggy.food="Pizza";
console.log(jack);
 */

/**
 * ! Deep Copy:- ...spread

const jack={
        cake:"ice-cream",
        info:{
            bike:"David putra",
            engine:"2000cc"
        }
    };


// const oggy={...jack};
const oggy=structuredClone(jack)
oggy.food="samosa";
oggy.info.bike="Pink scooty"

console.log("oggy:",oggy);
console.log("jack:",jack);
 */







