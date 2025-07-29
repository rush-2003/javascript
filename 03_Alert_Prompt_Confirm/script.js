//Alert
alert("I am alert for alert")

//prompt 
// function can be passed with a defalut value
let a = Number.parseInt(prompt("Enter a number: ", 100))
document.writeln(a)

//confirm
let write = confirm("Do you want to write it again on the page")
if (write){
    document.writeln(a)
}else{
    document.writeln("Please allow me to write")
}

//They are good for testing but not for production as they are old school
//Main execution thread of JS is blocked by these three
