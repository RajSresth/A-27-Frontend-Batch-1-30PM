/**
 * ! length:- Array size
 * ! index:- integer number starting from 0
 * ! array elements:- values written inside an array
 * ! array object object:- variable
 * ! square bracket:- []
 * ! Empty Array:- [] array without literals(values)
 */

/**
 * ! Ways to create an Array
 * Todo: 1. By using sqaure bracket and literals
const arr1=[10,20,30];
console.log("arr1:",arr1);
*/
 
/**
 *  Todo:2 By using new Keyword and Array Inbuild Constructor Function


// const skills=["html","css","js"]

const skills= new Array("html","css","js")
console.log("skills:",skills)
 */

/**
 * ! Array Inbuild Methods
 */

// const arr=[10,20,30,40];
// arr.push(40);
// arr.pop()

// arr.unshift(10)
// arr.shift()

// const idx= arr.indexOf(40);
// console.log("Index:",idx);

// const s1=["html","css","js","react"];
// const res= s1.includes("react");
// console.log("res:",res);


// const arr1=[10,20,30,40,50];
// arr1.reverse();
// console.log("arr1:",arr1);

/**
 * ! Diff between splice and slice?
 */

/**
 * ! Splice:- Insertion, Deletion and Updation
 * a:- starting index
 * b:- No of elements to be deleted
 * c:- New values to be added
 * ! It modifies the original array 
 * ! It return array of deleted elements


const arr=["html","tailwind","js","ts"];
const x=arr.splice(1,3,"css","js","sass");

console.log("arr:",arr);
console.log("x:",x);
 */

/**
 * ! slice(a,b)
 * a:- starting index
 * b:- last index + 1
 * ! It returns a new array
 * ! It doen't modify the original array


const arr=["html","css","js","java","sql","dsa"]

const newArray= arr.slice(0,3)
console.log("New Array:",newArray)
 */

/**
 * ! sort(callback)
 * ! Ascending:- (a,b)=> a - b
 * ! Descending:- (a,b)=> b - a


const arr=[10,7,9,1,8,3,6,4,2,5];
arr.sort((a,b)=> b - a);
console.log("arr:",arr);
 */

/**
 * ! forEach(callback, thisarg)
 * ! It is used to iterate over an array
 * ! It is Higher order function
 * ! It doesn't return anything
 */

const arr=[10,20,30,40,50];
const obj={
    a:10
}

const output=[ ];

arr.forEach(function task(element,index,array)
            {
                console.log(this)
                output.push(element * this.a);
            },obj)


console.log("output:",output)

