/**
 * ! Ways to create an Object?


const obj={ username:"chombu"};
 */

/**
 *  ! By using new Keyword and Inbuild Object Constructor

const obj= new Object({username:"Shivam", age:22})
console.log(obj);
 */

/**
 * ! By using new keyword and custom contructor function


function CreateObject (username, age, city)
{
    this.username= username;
    this.age= age;
    this.city= city;
}

const u1= new CreateObject("Ashish", 22, "Indore")
 */

/**
 * ! By using Class
 */

class Car
{
    constructor(name, price, color)
    {
        this.carname=name;
        this.price=price;
        this.color=color;
    }
}

const c1= new Car("Scorpio-n",2800000,"Black");
console.log("c1:",c1);
