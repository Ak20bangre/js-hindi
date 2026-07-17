const mySym= Symbol("key1")

const JSuser={
    name: "Aditya",
    "full name": "Aditya Kumar Bangre",
    [mySym] : "mykey1",  // [mySym] to use symbol datatype
    age : 22,
    location : "jabalpur",
    email : "ak20bangre@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","saturday"]
}

console.log(JSuser.email)
console.log(JSuser["email"])
console.log(JSuser["full name"])
console.log(JSuser[mySym]) //return symbol value

// Object.freeze(JSuser)  //Makes the object unchangeable

JSuser.greeting = function(){
    console.log("Hello js user")
}

console.log(JSuser.greeting())

JSuser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`)
}

console.log(JSuser.greetingTwo())

