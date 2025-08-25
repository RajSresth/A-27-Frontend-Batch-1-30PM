/**
 * ! call( obj, n1,n2...), apply(obj, [n1,n2....]) :- Immediate call the respective function
 * ! bind( obj, n1,n2...) 
 */

const u1={
    username: "Ravi",
    designation:"Frontend"
}

function details(company,city)
{
    console.log("details:",this);
    console.log("Company:",company)
    console.log("Company location:",city)
}


const res= details.bind(u1,"TCS","Noida");

export default res;