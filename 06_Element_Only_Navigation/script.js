const changeBodyRed = () => {
    document.body.firstElementChild.style.background = "red";
}

let b = document.body
console.log("First Child: ", b.firstChild) //Returns Any Node be it text(Empty Space)
console.log("First Child: ", b.firstElementChild) //Returns Element
changeBodyRed()