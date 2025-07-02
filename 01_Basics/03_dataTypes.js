// two types 1. Premitive 2. Non Premitive
// N -> Null
// N -> Number
// S -> Symbol
// S -> String
// B -> Boolean
// B -> BigInt
// U -> Undefined

let a = null
let b = 345
let c = false
let d = BigInt('5687')
let e = "String"
let f = Symbol("Symbol")
let g = undefined
console.log(a,b,c,d,e,f,g) 
console.log(typeof(e))

//Objects
const items = {
    "Rudalph":"Name",
    "Gonsalves":"Surname"
}
console.log(items["Rudalph"])