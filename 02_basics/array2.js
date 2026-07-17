const heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// heros.push(dc)   //dc inserted as 4th element of heros
console.log(heros)

//const allHero =heros.concat(dc)
//console.log(allHero)

const all_heros=[...heros,...dc]  //alternate of concat
console.log(all_heros)

console.log(Array.from("aditya")) // String => array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))

