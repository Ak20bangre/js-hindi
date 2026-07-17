const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn =false

console.log(Object.keys(tinderUser))

// console.log(tinderUser)

const regularUser={
    email: "some@gmail.com",
    fullname : {
        userfullname :{
            firstname : "aditya",
            middlename : "kumar",
            lastname : "bangre"
        }
    }
}

//console.log(regularUser.fullname)
//console.log(regularUser.fullname.userfullname)
//console.log(regularUser.fullname.userfullname.firstname)

const obj1={
    1 : "a",
    2 : "b"
}

const obj2={
    3 :"a",
    4 :"b"
}

//const obj3 = Object.assign({}, obj1 , obj2)  //concat objects
//console.log(obj3)

const obj3={...obj1,...obj2}  // concat objects
console.log(obj3)

