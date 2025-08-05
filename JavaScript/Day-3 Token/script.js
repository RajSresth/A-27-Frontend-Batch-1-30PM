/**
 * ! Keywords: var, let, const
 */

/** 
* ! var:- awara
1. Multiple time declaration
2. Multiple time initialization

var gf="Simran";

    gf="Anjali";

var gf="Kajal";
console.log(gf); 
 */

/**
 * ! let:- Pagal
 * 1. One time declaration
 * 2. Multiple time initialization


let gf = "Angel Priya";
    gf = "Megha";
    gf = "Muskan";

console.log(gf); // Muskan
 */

/**
 * ! const:- Deewana
 * 1. One time declaration
 * 2. One time initialization
 * 3. Cannot be changed


const gf="Khushi";
 console.log(gf);
  */

 /**
  * ! Identifier:-
  * classname, function name, variable name, etc.
  *   * 
  * ! Rules for Identifier:
  * 1. Cannot start with number
  * 2. Cannot contain special characters except underscore(_) and dollar($)
  * 3. Any keyword must not be used as an identfier.
  * 4. Any space is not allowed
  

 const user="Raj";
 const age=20;
 const isMarried=false;

 */

 /**
  * ! Operators:-
  * 
  * ! Types of Operators:
  * ! 1. Unary Operators: 
  *         1. Increment/ Decrement Operator:  +, -, ++, --
  * 
  * ! 2. Binary Operators: 
  * 1. Arithmetic Operators: +, -, *, /, %, 
  * 2. Assignment Operators: =, +=, -=, *=, /=, %=
  * 3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
  * 4. Logical Operators: &&, ||, !
  * 
  * ! 3. Ternary Operator:
  * 5. Conditional Operator:-   ______ ?_______ : _______



let a = 10;
    a++;  // 11
    a++;  // 12
    a++;  // 13
    a++;  // 14
let b= 14++ * 2;   
console.log(a)  // 15
console.log(b)  // 28
  */

/**
 * Binary Operators
 
console.log( 10 + 20); // 30
console.log( 20 - 10); // 10
console.log(5 * 4); // 20
console.log(20 / 5); // 4 (quotient)
console.log(20 % 3); // 2 (remainder)
console.log(2 ** 2); // 4 (power)
*/

/**
console.log(10 + "10")    //1010
console.log(10 + 10 + "10") //2010
console.log(10 - "50")  // -40
console.log(10 * 5)  // 50
console.log(10 - 'a')  // Nan (Not a Number)
 */

/**
 * ! Assignment Operators: =, +=, -=, *=, /=, %=

let a=10;
a +=5  // a = a + 5
console.log(a) // 15

let b=20;
 b -=10;  // b=b - 10

 console.log(b)
 */

 /**
  * ! Comparison Operators: ==, ===, !=, !==, >, <, >=, <=p
 
* ! Primitive Literals
 const a="10abc";
 const b=5;

 console.log(a - b)  // Nan


 const x=10;
 const y=null;

 let f;
 var g;
 console.log(z)
 */

 /**
  * ! String:- collection of character
  */

 const user1="Shubham";

// Template String:- String Interpolation
const msg=`${user1} Bhai bulati h magar jane ka nhi..!`;

console.log(msg)

/**
 * ! Symbol()
 */

let a=10;

let b=Symbol(a)
console.log(a === b)

/**
 * ! punctuator:- ; , [], {}, () , .
 */