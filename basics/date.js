let myDate= new Date()  // type of date is object
//console.log(myDate)
//console.log(myDate.toString())
//console.log(myDate.toDateString())
//console.log(myDate.toISOString())
//console.log(myDate.toLocaleString())

let myCreatedDate=new Date(2023,0,23)  //0 => jan
console.log(myCreatedDate)

let newDate= new Date(2024,4,29,5,35,21)
console.log(newDate)

let anotherDate= new Date("01-14-2025")
console.log(anotherDate.toLocaleString())

console.log(newDate.getTime()) //miliseconds since 1st jan 1970

/*
newDate.toLocaleString('default',{
    weekday: "long",
    
})
*/


