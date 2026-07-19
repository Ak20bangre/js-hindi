for(let i=0;i<10;i++){
    //console.log(i+1)
}


//Arr looping
const coding=["js","cpp","python","java"]

//forEach
coding.forEach((item)=>{
    //console.log(item)
})

const mycoding=[
    {
        language:"javascript",
        ext:"js"
    },
    {
        language:"python",
        ext:"py"
    },
    {
        language:"java",
        ext:"java"
    },
]

mycoding.forEach((item)=>{
    console.log(item.ext)
})



//Maps looping
const map=new Map()
map.set("IN","India")
map.set("AUS","Australia")
map.set("RO","Rome")
map.set("IN","India")

// for of loop
for(const [key,value] of map){
    //console.log(key)
}


//Object Looping
const myobj={
    js:"javascript",
    cpp: "c++",
    rb:"ruby"
}
console.log(myobj)

//for in
for(const key in myobj){
    //console.log(key)
}

