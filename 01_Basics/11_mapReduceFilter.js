arr = [45,23,21]
console.log(arr)

// For Each -> Works with same array
arr.forEach((value, index ,array) => {
    console.log(value, index ,array)
});

//Map -> Created a new array
newArr = arr.map((value, index ,array)=>{
    console.log(value, index ,array)
    return value + 1
})
console.log(newArr)

//Filter -> return filtered array
filtered_arr = arr.filter((element) => {
    return element<45
})
console.log(filtered_arr)

//Reduce
arr1 = [10,30,80,60,50]
reduce_array = arr1.reduce((h1, h2) => {
    return h1 + h2
})
console.log(reduce_array)