/**
 * ! map(callback,thisArg)


const arr=[1,2,3,4,5];

const x= arr.map(function task(element,index,array){
                        
                         if(element < 4)
                        {
                            return element**2
                        }
                    return 
                })
                                   
console.log("x:",x);
 */

/**
 * ! filter(callback, thisArg)


const arr=[1,2,3,4,5];

const x=arr.filter(task=(element)=>{

                    if(element < 4)
                    {
                        return true;
                    }
            }).map(element => element ** 2);

                    
console.log("x:",x);                      
 */

/**
 * ! reduce(callback,initial value of accumulator, thisArg)
 */


// const x= arr.reduce((accumulator, element, index, array)=>{
//                accumulator= accumulator + element;
          
//                return accumulator;
// },0);

/**
 * ! reduce(callback, initial value of accumulator)
const arr=[10,20,30,40,50];
const x=arr.reduce((acc,element,index,array)=>{
    if(element < 40)
    {
        acc.push(element * 10);
    }
    return acc;
},[])

console.log("x:",x);
 */

/**
 * ! reduceRight(callback, initial value of accumulator)
const arr=[10,20,30,40,50];
const x=arr.reduceRight((acc,element,i)=>{
    console.log(`Element at ${i}`,element);
},0);
 */

/**
 * ! flat(1)

const arr=[
            10,
            [20,30],
            40,
            [50,[60,70],80],
            90,
            [100,[110,[120,130,[140,150]]]]
        ];

const x=arr.flat(4)
console.log("x:",x)
 */


/**
 * ! flatmap()
 * ! find()
 * ! findLast()
 * ! findIndex()
 * ! findLastIndex()


const cart=[
            {item:"Shirt",price:2000},
            {item:"Shoe", price:25000},
            {item:"perfume", price:1500},
            {item:"Blezar", price:20000},
            {item:"perfume",price:2000}
        ];

const x= cart.findLastIndex((element, index,array)=>{
                if(element.item === "perfume"){
                    return true;
                }
        })

console.log("x:",x)
 */



/**
const x= cart.findLast((element, index,array)=>{
                if(element.item === "perfume"){
                    return true;
                }
        })

console.log("x:",x)
 */


/**
 * ! some() vs every()


const team=[
    {emp:"Shivam", skill:"Data Science"},
    {emp:"Kunal", skill:"Data Science"},
    {emp:"Anand", skill:"Data Science"},
    {emp:"Ashish", skill:"Data Science"},
    {emp:"Gaurav", skill:"Data Science"}
]

const isExist = team.every((element,index,array) => {
        if(element.skill === "Data Science")
        {
            return true;
        }
        return false;
    })

    console.log("is Employee Exist:", isExist);

 */

    


