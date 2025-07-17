const arr = [7, true, "Rudalph", null]
console.log(arr)
console.log(arr[1])

//objects ke andar "for-in" keys return karta hai aur array ke andar indices
for(i in arr){
    console.log(i)
}

for(i of arr){
    console.log(i)
}

for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

arr[0] = 10 // Changing Item
arr[4] = 40 // Adding The Item
arr[6] = 90 // Adding The Item and Creating Empty Item
console.log(arr)

console.log(typeof(arr))

//METHODS
array = [1,2,3,4,5,6]

let strs = array.toString()
console.log(strs)

let join = array.join("-")
console.log(join)

let x = array.pop()
console.log(x)

let y = array.push(6) //return length of array
console.log(y)

let z = array.shift() //remove from front
console.log(z)

let p = array.unshift(1000)//return length of array
console.log(p)

delete array[0]
console.log(array)
console.log(array.length)//Array length remains the same

num1 = [1,2,3,4]
num2 = [5,6,7,8]
let newArr = num1.concat(num2)
console.log(newArr)

//Sort function sorts alphabetically and not numarically
let num3 = [9,8,7,6,5,4,3,2,1]
console.log(num3.sort())

// To sort numerically, you should use a compare function:
const nums = [10, 5, 2, 100];
nums.sort((a, b) => a - b); // Ascending
console.log(nums); // Output: [2, 5, 10, 100]

nums.sort((a, b) => b - a); // Descending
console.log(nums); // Output: [100, 10, 5, 2]


//SPLICE AND SLICE
arrays = [1,2,3,4,5,6,7,8,9]
// splice(start_index, number_of_elements_to_remove, ele1_to_add, ele2_to_add, ...., ....)
arrays.splice(2, 3, 1000, 1001, 1002)//returns array of deleted array
console.log(arrays)

let slice = arrays.slice(2)
console.log(slice)

//LOOPS
aura = [1,2,3,4,5,6,7,8,9] 
//For Each Loop
aura.forEach((element)=>{
    console.log(element*element)
})

let string = "Rudalph"
let newArrays = Array.from(string)
console.log(newArrays)

