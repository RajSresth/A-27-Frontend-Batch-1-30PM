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
 */

function CreateObject (username, age, city)
{
    this.username= username;
    this.age= age;
    this.city= city;
}

const u1= new CreateObject("Ashish", 22, "Indore")

