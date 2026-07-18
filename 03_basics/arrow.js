const user ={
    username :"aditya",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        //console.log(this)  //complete user object
    }

}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this)  //empty object in node enviornment
                     //window object in browser

/*
function chai(){
    let username="aditya"
    console.log(this)   //this constains a lot of other methods
}
chai()
*/

/*
const chai= () => {     //**********arrow function********
    let username="aditya"
    console.log(this)   //this will return empty object
}
chai()
*/

const addTwo =(num1,num2) =>{
    return num1+num2                    //explicit return
}
console.log(addTwo(3,4))

const add2 =(num1,num2) => (num1+num2)  //implicit return
console.log(add2(4,1))

//const add2 =(num1,num2) => ({username:"aditya"})   //to return object ({}) 
