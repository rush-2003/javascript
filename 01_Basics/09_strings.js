//STRINGS ARE IMMUTABLE

let x = "Rudalph"
console.log(x)
console.log(x.length)
console.log(x[0])

//Template Literals -> We can use both single quotes and double quotes as "...'----'..."

//String Interpolation
let boy1 = "Rudalph"
let girl1 = "Shruti"
let sentence = `${boy1} is friend of ${girl1}`
console.log(sentence)

//Escape Sequence Chars
let fruit = 'Banana\'s' //backslash**
// \n
// \t

//String Functions/Methods
let z = "Rudalph"
//1. lengths -> Property
console.log(z.length)
//2. Uppercase -> Method
console.log(z.toUpperCase())
//3. Lowercase -> Method
console.log(z.toLowerCase())
//4. Slice
console.log(z.slice(2,4))
//5. Replace
console.log(z.replace("Rud", "Gon"))
//6. Concatination
let one = "Rudalph"
let two = "Gonsalves"
console.log(one.concat(" ", two, "Good to Go"))
//7. Trim

for(let i=0; i<z.length; i++){
    console.log(z[i])
}