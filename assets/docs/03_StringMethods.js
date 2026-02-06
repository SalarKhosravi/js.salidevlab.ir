// --- String and it method -----

let text1 = "sea";
let text2 = "food";

// concat: mix two string
//-----------------------------
let result = text1.concat(text2);
console.log(result);    // seafood



// includes: check if a word exist
//-----------------------------
text = "Hello world, welcome to the universe.";
result = text.includes("world");
console.log(result);    // true



// slice: slice out a piece
//-----------------------------
text = "Hello world!";
result = text.slice(0, 5);
console.log(result);    // Hello





// split: 
//-----------------------------
text = "How are you doing today?";
let myArray = text.split(" ");
console.log(myArray);   
// [ 'How', 'are', 'you', 'doing', 'today?' ]

text = "https://app.digikala.ir/mobiles/iphone";
myArray = text.split(".");
console.log(myArray);   
// [ 'https://app', 'digikala', ... ]
console.log(myArray.at(1));      
// digikala





// Case change: 
//-----------------------------
text = "Hello World!";
text.toLocaleLowerCase()  // hello world!
text.toLocaleUpperCase()  // HELLO WORLD!
text.toLowerCase()        // hello world!
text.toUpperCase()        // HELLO WORLD!





// trim: remove extra space 
//-----------------------------
text = "  Hello World!    ";
result = text.trim();
console.log(result);
 // Hello World!





// replace and replaceAll: replace a word with another
//-----------------------------
text = "Visit Microsoft!";
text.replace("Microsoft", "W3Schools");



text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
console.log(text);





