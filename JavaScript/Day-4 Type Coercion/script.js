/**
 * ! Type Coercion:- To convert one type of data into another type is known as Type Coercion or Type conversion.
 * 
 * ! Types of Type Coercions:- 2 types
 * 1. Implicit Type Coercion:- 
 *    To convert one type of data into another type by js engine automatically is known as implicit type coercion.
 * 
 * 2. Explicit Type Coercion:-
 *   To convert one type of data into another type forcefully by js engine is known as Explicit type coercion.
 * 
 * ! typeOf:- The typeof operator in JavaScript is used to check the type of a value.
 */

/**
 * ! Example of Implicit Type coercion
 
const a="10";
const b=5;
const res= a - b;
console.log("res:",res);
*/

/**
 * ! Example of Explicit Type Coercion
 * 1. Number()
 * 2. Boolean()
 * 3. String()
 * 4. Symbol()
 * 5. BigInt()
 * 
 * ! Bonus:- Ecma Script-6
 * Number() ---> +


const a=10;
const b=Number(a);
console.log("b:",b);
console.log(typeof(b));
 

const b="5";
const x=  +b;

console.log("x:",x)
console.log("X Type is:",typeof(x))
*/

const userAge= +prompt("Enter userAge");
console.log("User:",userAge);
console.log("User type is:", typeof(userAge));


