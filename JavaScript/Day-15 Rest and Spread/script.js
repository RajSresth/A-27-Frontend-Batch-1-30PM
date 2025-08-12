const user={
    username:"Tinku",
    age:22,
    city:"Noida",
    pin:201301
}

const {username ,...obj} = user;

console.log(username)
console.log(obj)


const movies=["dhamaal","dhol","welcome","php","housefull"]

const [m1,...m2]= movies;

console.log(m1)
console.log(m2)

