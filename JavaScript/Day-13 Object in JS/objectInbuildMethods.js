/**
 * ! Object.keys() ✅
 * ! Object.values() ✅
 * ! Object.entries() ✅
 * ! Object.fromEntries() ✅
 * ! Object.assign() ✅
 * ! Object.freeze() ✅
 * ! Object.isFrozen() ✅
 * ! Object.hasOwn()
 * 
 * ! Inheritance
 * !__proto__
 * ! Object.setPrototypeof()
 * ! Object.getPrototypeof()
 * ! Object.create()
 */

/**
const obj={
    name:"Tinku",
    age:"21",
    city:"Noida"
}

const keys=Object.keys(obj);
// console.log(keys);

const vals= Object.values(obj);
// console.log(vals);

const x=Object.entries(obj)
console.log("x:",x)

const y=Object.fromEntries(x)
console.log("y:",y);
 */

/**
 * ! Example:- Object.assign()
const user={
    username:"Shubham",
    age:24,
    city:"Delhi",
    skills:["React","Node"]
}

const company={
    companyName:"XYZ Infotech",
    "job location":"Gurugram",
}

const req={
    desg:"Frotned Developer",
    sal:"5LPA"
}

const emp= Object.assign({},user,company,req)
console.log("emp:",emp);
 */

/**
 * ! Object.freeze() 
 * ! Object.isFrozen()
const obj={
    fname:"Salmon",
    lname:"Bhai",
    state:"Maharashtra"
}

Object.freeze(obj)

delete obj.state;
console.log(obj)
console.log(Object.isFrozen(obj))
 */


/**
 * ! Object.hasOwn()


const obj={
    username:"Chombu",
    age:24,
    city:"Noida"
}

const x= Object.hasOwn(obj, "state")
console.log("x:",x)


if(x)
{
  console.log("Key Exist...")  
}
else{
    console.error("Invalid Key!")
} */

/**
 * ! Prototypal Inheritance:-
 *  object -----> object
 *  class ------> class



const animal={
    name:"Ranbir Kapoor",
    eat:function (){
        console.log(`${this.name} Can eat`)
    }
}

const dog={
    // name:"Sheero",
    sleep:function (){
        console.log(`${this.name} can sleep`)
    },
    __proto__:animal
}

// dog.__proto__ = animal;

const superDog ={
    // name:"Bolt",
    fly:function (){
        console.log(`${this.name} can fly..`)
    },
    __proto__:dog
}

// superDog.__proto__=dog;


superDog.fly()
 */



/**
 * ! Object.setPrototypeOf()
 * ! Object.getPrototypeOf()


const earlyman={
    name:"tarzan",
    hunt:function (){
        console.log(`${this.name} can hunt..!`)
    }
}

const human={
    name:"Normal Human",
    eat:function(){
        console.log(`${this.name} can eat`)
    }
}

Object.setPrototypeOf(human,earlyman)

const superHuman={
    name:"Iron Man",
    fly:function (){
        console.log(`${this.name} can fly`)
    }
}

Object.setPrototypeOf(superHuman,{human,earlyman});
console.log(superHuman)



const y=Object.getPrototypeOf(superHuman);
console.log("y:",y);
 */


/**
 * ! Object.create()
 */

const earlyman={
    name:"tarzan",
    hunt:function (){
        console.log(`${this.name} can hunt..!`)
    }
}

const human=Object.create(earlyman,{
    name:{
        value:"Tinku",
        writable:true,
        enumerable:true,
        configurable:false
    },
    age:{
        value:"24",
         writable:false,
        enumerable:true,
        configurable:false
    }
});  


human.name="Don"
console.log("human object:",human)






const obj={
    name:"TInku",
    age:22
}