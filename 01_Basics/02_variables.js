// Dynamically Typed Language
// JS is case sensitive

let names = "Rudalph Gonsalves"
console.log(names)
names = 2003
console.log(names)

// Var, Let and Const

//Var is Globaly Scoped and let is Block Scoped
var a = 10
var b = "Rudalph"
{
    let a = 1000
    console.log("I am inner scope: ", a)
    var b = 100
}
console.log(b)
console.log("I am outer scope: ", a)

// var can be updated and redeclare any where
// let can be updatde in scope only and cannot be re declared in scope but can be re declare outside scope
//Understand above 2 statements from below code snippet
var a = 10 //declare
a = 90 //updates
var a = 100 //redeclare
let b = 1 //declare
b = 2 //update
let b = 3 // cannot be redeclared
{
    let b = 5 // can be redeclared in different scopr
}

//CONST - Cannot be updated
const author = "Rudalph"

//Initilization
//Const need to be initilize during declaration
//Var is initilized to undefined
//Let and Const are not initilized
