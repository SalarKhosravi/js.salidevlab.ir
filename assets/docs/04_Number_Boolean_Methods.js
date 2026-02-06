let num = 15;
let text = num.toString();  // 15



Number.isInteger(123); // true
Number.isInteger(-123);// true
Number.isInteger('123'); // false
Number.isInteger(4-2); // true
Number.isInteger(4/2); // true
Number.isInteger(5-2); // true
Number.isInteger(5/2); // false



// parseInt: convert to integer number
//----------------------------------
Number.parseInt("10");         // 10
Number.parseInt("10.00");      // 10
Number.parseInt("10.33");      // 10
Number.parseInt("34 45 66");   // 34
Number.parseInt(" 60 ");       // 60
Number.parseInt("40 years");   // 40
Number.parseInt("He was 40");  // Nan



// parsfloat: convert to float number like 0.0, 1.0, 1.2, 3.0032, -3.23, -8.0
//----------------------------------
Number.parseFloat(10);         //  10
Number.parseFloat("10");       // 10
Number.parseFloat("10.33");    // 10.33
Number.parseFloat("34 45 66"); // 34
Number.parseFloat("He was 40");// Nan




// toFixed and : convert to float number like 0.0, 1.0, 1.2, 3.0032, -3.23, -8.0
//----------------------------------
num = 5.56789;
num.toFixed(); // 6
num.toFixed(2);// 5.57

num = 100000000
num.toLocaleString();// 100,000,000
num.toLocaleString("en-US", {style:"currency", currency:"USD"}); // $100,000,000.00









// isNaN : returns true if a [value] is Not-a-Number
// Number.isNaN : returns true if a number is Not-a-Number
// //----------------------------------
isNaN(123);            // false
Number.isNaN(123);     // false

isNaN(-1.23);          // false
Number.isNaN(-1.23);   // false

isNaN('123');          // false
Number.isNaN('123');   // false

isNaN(0/0);            // 
Number.isNaN(0/0);     // 

isNaN(5-2);            // false
Number.isNaN(5-2);     // false

isNaN(0);              // false
Number.isNaN(0);       // false

isNaN('Hello');        // true
Number.isNaN('Hello'); // false

isNaN('2005/12/12');   // true
Number.isNaN('2005/12/12'); // false

isNaN(' ');            // false
Number.isNaN(' ');     // false
