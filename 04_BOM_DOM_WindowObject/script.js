//Window is global object
console.log(window)

//DOM - Document Object Model
// Entire HTML page is converted to JS object and called DOM
console.log(window.document)
console.log(document.body)

//Use case 1
document.body.style.backgroundColor = "yellow"

//BOM - Browser Object Model
//Additional object provided by browser (hodt environment)
//Eg: Alert, Confirm, Prompt