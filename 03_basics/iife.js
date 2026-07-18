// Immediately Invoked Function Expression (IIFE)
//used to remove the effect of global variable on a fucntion

(function chai(){           //named iife
    console.log(`DB connected`)
})();

// (Defination)(execution call)

( (name)=>{                 //unnamed iffe
    console.log(`DB connected two ${name}`)
})("aditya");


