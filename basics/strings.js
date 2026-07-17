let name="aditya"
let city="jabalpur"

console.log(`I am ${name} and I live in ${city}`)

const gameName= new String("Aditya_K_B")
console.log(gameName[0])
console.log(gameName.length)

const newString= gameName.substring(0,4)
console.log(newString)

const anotherString= gameName.replaceAll('_','-')
console.log(anotherString)

console.log(anotherString.split('-'))
