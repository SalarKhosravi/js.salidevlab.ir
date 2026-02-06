
// 1- Loop with for, while

console.log('-------- for loop --------');
for (let i = 0; i < 5; i++) {
  console.log('number is ', i);
}


let text = []
for (let i = 0; i < 5; i++) {
  text.push(i**2);
}
console.log(text);
console.log('----------------');



console.log('-------- while loop --------');
let i = 0
while (i < 10) {
  console.log("The number is: ", i);
  i++;
}



do {
  console.log("The number is: ", i);
  i--;
}
while (i > -3);
console.log('----------------');



// Break: finish the loop
console.log('------- break ---------');
for (let i = 0; i < 10; i++) {
  if (i === 3) { 
    console.log('break at i = ', i); 
    break;
  }
}

loop1: for (let i = 1; i < 5; i++) {
  loop2: for (let j = 1; j < 5; j++) {
    if (i === 3) { 
      // break loop1; 
      break loop2; 
    }
    console.log('i, j is :', i, j);
  }
}
console.log('----------------');




// continue
console.log('-------- continue --------');
for (let i = 1; i < 10; i++) {
  if (i === 3 || i === 4) { 
    continue; 
  }
  console.log('i = ', i); 
}
console.log('----------------');



