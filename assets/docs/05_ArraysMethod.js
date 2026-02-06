// Array Methods: 
// very important, memorize them by order, first is the most use case
// https://www.w3schools.com/jsref/jsref_obj_array.asp
let arr1 = [1, 2, 3]
let arr2 = ['a', 'b', 'c']
let fruits = ["Banana", "Orange", "Apple"];


// length with count the memebrs
let result = fruits.length; // 4
console.log(result);




// get a member by index (position)
// 1- with at
// -------------------------
let fruit = fruits.at(0);
// console.log(fruit); // Banana

// 2- with []
// -------------------------
fruit = fruits[1]
// console.log(fruit); // Orange

fruit = fruits.at(-1);
// console.log(fruit); // Mango








// check if memebr exist in array
fruits = ["Banana", "Orange", "Apple"];
fruits.includes("Mango")// true


// Join two arrays into one
arr1 = [1, 2, 3]
arr2 = ['a', 'b', 'c']
arr1.concat(arr2)       
//[ 1, 2, 3, 'a', 'b', 'c' ]



// get the index of a value
arr2 = ['a', 'b', 'c']
arr2.indexOf('b')   // 1



// join all memebr into one word
arr2 = ['a', 'b', 'c']
arr2.join()       // a,b,c
arr2.join('...')  // a...b...c
arr2.join('')     // abc




// delete the last memebr
arr1 = [1, 2, 3]
arr1.pop()  // [1, 2]



// add 99 to the end of array
arr1 = [1, 2, 3]
arr1.push(99)       
// [1, 2, 3, 99]


// add 99 to the begining of array
arr1 = [1, 2, 3]
arr1.unshift(99)       
//  [99, 1, 2, 3]


// Reverse the array
arr1 = [1, 2, 3]
arr1.reverse()      
// [3, 2, 1]


// delete the first element
arr1 = [1, 2, 3]
arr1.shift()       
//  [2, 3]


// copy a slice of array  into a new array
let arr3 = arr1.slice(0,2)      
// [1, 2]


// Sorts elements alphabetically
let arr4 = [2, 3, 9, 8, 4, 1]
arr4.sort()       
// [ 1, 2, 3, 4, 8, 9 ]



// Adds elements in a specified way and position
// At position 2, add "Lemon" and "Kiwi"
fruits = ["Banana", "Orange", "Apple"];
fruits.splice(2, 0, "Lemon", "Kiwi");



// Converts elements to strings
fruits = ["Banana", "Orange", "Apple"];
fruits.toString()       // Banana,Orange,Lemon,Kiwi,Apple,Mango



// with() will copy a new array with inserted data
let months = ["Januar", "Februar", "Mar", "April"];
let myMonths = months.with(2, "March");  
// asnwer [Januar, Februar, March, April]






// filter: select only memebr with a condition
ages = [32, 33, 17, 40];
result = ages.filter((age)=>{return age > 26})
console.log(result); // [ 32, 33, 40 ]



// find: Find the value of the first element with a condition
ages = [32, 33, 17, 40];
result = ages.find((age)=>{return age > 34})
console.log(result);// 40



// CONDITIONS
// ----------------------------
// every: check the boolean for all memebr, all must be true
ages = [32, 33, 17, 40];
result = ages.every((age)=>{return age > 16})
console.log(result);// true for age = 16


// some: check the boolean for at least one or more true
ages = [32, 33, 17, 40];
result = ages.some((age)=>{return age > 39})
console.log(result);// true




// LOOP
// -------------------------------
// 1- forech: a loop for doing an action
fruits = ["apple", "orange", "cherry"];
fruits.forEach((item)=>{
    console.log(item)
});

fruits.forEach(myFunction)
function myFunction(item, index, arr) {
  console.log(index, item);
  
}


// 2- map : Return a new array with action on all element
// --------------------------
numbers = [4, 9, 16, 25];
let newArr = numbers.map(myFunction)
function myFunction(num) {
  return num * 10;
}
console.log(newArr);// [ 40, 90, 160, 250 ]


newArr = numbers.map(Math.sqrt)
console.log(newArr);// [ 2, 3, 4, 5 ]


newArr = numbers.map((item)=>{return 3*item})
console.log(newArr);// [ 12, 27, 48, 75 ]






