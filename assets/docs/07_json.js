// Json has two method
// 1- load json: convert string into object
let obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');
console.log(obj);





// 2- stringify: convert object into text
obj = { "name":"John", "age":30, "city":"New York"};
let myJSON = JSON.stringify(obj);
console.log(myJSON);


