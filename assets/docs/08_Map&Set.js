// -------- Map CRUD --------
const fruits = new Map();

// Set data
fruits.set("test", 100);
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);


// Get Data
console.log(fruits.get("apples"));  // 500
console.log(fruits.get("oranges")); // 200


// Delete a pair of k, v from map
fruits.delete("test");


// Clear all data
// fruits.clear();




// Methods of Map
console.log(fruits.size);           // 3
console.log(fruits.has("apples"));  // true
console.log(fruits.keys());         
// { 'apples', 'bananas', 'oranges' }
console.log(fruits.values());       
// { 500, 300, 200 }








// List all entries
let text = "";
fruits.forEach (function(value, key) {
  console.log('key =>', key, ', value =>', value);
  console.log(key);
  console.log(value);
})









// SET
// ------ SET CRUD --------
// create a set
let mySet = new Set(["a","b","c"]);
console.log(mySet);


// Seting value to a set
mySet.add("1");
mySet.add("2");
mySet.add("3");
console.log(mySet);



// get all values
console.log('values: ', mySet.values());
console.log('keys: ', mySet.keys());
console.log('entries: ', mySet.entries());


// has a memebr
console.log('d: ', mySet.has("d"));
console.log('a: ', mySet.has("a"));


console.log(mySet.size);        // 6




// Loop over a set
// ----- loop using [ of ] -----
mySet = new Set(["a","b","c"]);
text = "";
for (const x of mySet) {
  console.log(x);
  text += x
}
console.log(text);      // abc


// --- loop using [ forEach ] -----
mySet.forEach((value) => {
  console.log('value is: ', value.toUpperCase());
})



// method for set calculations
const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);
let answer = null

// action on two set
A.union(B);
A.intersection(B);
A.difference(B);
A.symmetricDifference(B);
A.isSubsetOf(B);
A.isSupersetOf(B);
A.isDisjointFrom(B);

