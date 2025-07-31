//Get Element By ID
//Every element has to have unique id
//Return one element
let cardTitle1 = document.getElementById("cardTitle")
console.log(cardTitle1)
cardTitle1.style.color = "blue"


//Get Element By Class Name
let cardTitle = document.getElementsByClassName("card-body")[0]
console.log(cardTitle)
cardTitle.style.color = "red"


//QuerySelectorAll and QuerySelector
//Returns all the elements with class name 'note'
let qsa = document.querySelectorAll(".note")
console.log(qsa)
qsa[0].style.color = 'green'
qsa[1].style.color = 'red'
qsa[2].style.color = 'blue'
//Returns the 1st element with class name 'note'
let qs = document.querySelector(".note")
console.log(qs)
//Similar to getElementByID but slower and selects id in css-style
let qs_by_id = document.querySelector('#main')
console.log(qs_by_id)


//Get Element By Tag Name
tagName = document.getElementsByTagName('a')
console.log(tagName)
//Advanced - Nesting can be done easily
tagN = document.querySelector('.card').getElementsByTagName('a')
console.log(tagN) 


//Get Element By Name
console.log(document.getElementsByName('search'))