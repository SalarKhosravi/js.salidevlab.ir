// 1- Define a Variable
//--------------------------------------
var x1 = 1       // this is old, dont use it
let x2 = 1       // standard variabel define
const x3 = 1     // variabel which is constant that won't change



// 2- Data type
// 2-1- SimpleData: 
//--------------------------------------
// 2-2-1: Numbers: any number positive or negative
let x4 = 1
let x5 = 1.1
let x6 = 0.01
let x7 = -2.01

// 2-2-2: String: a word, a character or a full text
let name1 = 'ali'
let name2 = 'ali akbari'
let name3 = 'ali akbari'

// 2-2-3: Boolean: true or false | zero or one 1:0 
let status1 = true
let status2 = false



// 2-2- ComplexData: 
// 2-2-1: Array (a mix of any data type all store in one variable with use of [])
//--------------------------------------
let ar1 = [1, 2, 3]
const ar2 = ['reza', 'ali', 3]
let ar3 = [1, [2, 3], [3, [4, 5], 6]]
const ar4 = ['a', 'b', 'c']
let ar5 = ['ali', 212, true, 'a', 3]        // arr can contain any data type
// let ar5 = [string, number, boolean, string, number]




// 2-2-2: Object (a mix of any data type with a key for each value)
//--------------------------------------
const person = {
    firstName:"ali",
    lastName:"akbari",
    age:32,
    nationality:"Iran"
};





// 3- Pars value from type to type
//--------------------------------------
console.log(Number(true));
console.log(Number(false));

console.log(parseFloat(10));
console.log(parseInt("10"));

console.log(String(new Date()));
console.log(String("12345"));
console.log(String(12345));





// 4- Operators
//--------------------------------------

// mathematic operators
//-------------------------
// +
// -
// *
// **
// /
// //
// %

// +=
// *=
// /=
// %=

// ++
// --



// logical operators
//-------------------------
// >
// <
// >=
// >=
// !
// == 
// !=
// ===
// !===


// AND Assignment
// &&
let left = 0 && 42;
let right = 1 && 42;
console.log(left, right);  // 0 42



// OR Assignment
// ||
left = 1 || 42;
right = 0 || 42;
console.log(left, right);  // 1 42


// Nullish Operator a ?? b 
left = 1 ?? 42;
right = null ?? 42;
console.log(left, right);  // 1 42




// function: a box of multiple line of code with a name
// 1- first approach
function functionName(x1, x2){
    // line of codes
    // line of codes
    // line of codes
    // line of codes
    return true
}

// 2- second approach
let func = (x1, x2) =>{
    console.log(x1 + x2);
    
}




// sample of a function to captalize a sentenses
function make_first_word_capital(text){
    let newText = ''
    if (text?.length > 0) {
        let s = text.split(" ");
        s.map((item)=>{
            newText += ' '.concat(item[0].toUpperCase()+item.slice(1))
        })
    }
    return newText
}

let text = 'this is a sample text for check the function'
let result = make_first_word_capital(text)
console.log(result);

