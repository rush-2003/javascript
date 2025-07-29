// We have 3 major Nodes
// 1. Text Node -> Lead of DOM tree  Represents the text inside an HTML element.
// 2. Element Nodes -> Represents an HTML element.
// 3. Comment Nodes -> Represents an HTML comment.


// Accessing Parents Childs and Siblings
console.log(document.body.firstChild)
console.log(document.body.lastChild)

console.log(document.body.childNodes)
// It might look like an array but its not
// We can convert it to arrat
let arr = Array.from(document.body.childNodes)
console.log(arr)

//DOM is read only

console.log(document.body.childNodes[3])
let a = document.body.childNodes[3]
console.log(a.parentElement)//If parent is element then only valid return else null
console.log(a.parentNode)//Whoever is the parent that will be returned
console.log(a.firstChild)
