//Truthy Values => always assumed as true
// "0", "false", " ", [], {}, function(){}

//Falsy Values => Always assumed to be false
// false , 0, -0, BigInt 0n, "", null, undefined

if(Object.keys(emptyObj).length===0){   //to check object is empty
    console.log("object is empty")
}

