function success1(val1)
{
    console.log("val1:",val1);
    
    throw new Error("Something Went Wrong..!");
    
    return "Chombu";
}

function success2(val2)
{
    console.log("val2:",val2);

    return val2+ " singh"
}

function success3(val3)
{
    console.log("val3:",val3)
}


function error(reason)
{
    console.log("reason:",reason);
}

function globalError(err)
{
    console.log("Global Error:",err)
}

export {success1, success2, success3 , error, globalError};