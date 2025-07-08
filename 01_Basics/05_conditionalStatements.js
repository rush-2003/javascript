// If Statement
// If Else Statement 
// If Else If Else Statements
// Switch Statements

// let a = prompt("Hey whats your age: ")
// alert("I am done")
a = "10"
a = Number.parseInt(a)
console.log("Your age is: ", a)

if(a<10){
    console.log("I am in if block")
}else if(a>=10){
    console.log("I am in else if block")
}else{
    console.log("I am in else block")
}

//Switch Ststement
let expr = "rudalph"
switch(expr){
    case "rudalph":
        console.log("Its my name")
        break
    case "gonsalves":
        console.log("Its my surname")
        break

    default:
        console.log("Invalid expression detected")
}

//Ternary Operator
age = 18
console.log(age>=18? "You can drive" : "You cant drive")



