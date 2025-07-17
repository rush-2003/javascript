//FOR LOOP
for(let i=0; i<10; i++){
    console.log(i)
}

//PROGRAM: Add n natural numbers
sum = 0
for(let i=0; i<10; i++){
    sum=sum+i
}
console.log(sum)

const obj ={
    rudalph:10,
    shruti:20,
    ayush:15
}
//For In Loop
for(let a in obj){
    console.log(a + "=" + obj[a])
}
//For Of Loop
for(let b of "Rudalph"){
    console.log(b)
}


//PRACTICE 
const objs = {
    rudalph:100,
    shruti:250,
    alroy:200,
    nathan:300,
    shivprassad:300
}

keys = Object.keys(objs)
console.log(keys)
for(let i=0; i<keys.length; i++){
    console.log("marks of " + keys[i] + " are: " + objs[i])
}

for(i in objs){
    console.log("marks of " + i + " are: " + objs[i])
}