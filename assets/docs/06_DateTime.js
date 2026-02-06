// Time: work with methods to get time, year, day, hour
//-----------------------------
// get the date and time of now (present time)
let now = new Date();
console.log(now);      
// 2026-01-28T00:05:01.475Z


// get today
let day = now.getDate()
console.log(day);     
// get the day of month


// get present time
let time = now.getTime();
console.log(time)     
// 1769559628679

// get hours
let hours = now.getHours();
console.log(hours);


// get minutes
let minutes = now.getMinutes();
console.log(minutes); 


// get seconds
let seconds = now.getSeconds();
console.log(seconds)      // 12



// get month in name and number from zero
const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let monthNumber = now.getMonth();
let monthName = month[now.getMonth()];
console.log(monthNumber, monthName);      
// 0 January



// show date and time , human readable
let result = now.toDateString();               
console.log(result) // Wed Jan 28 2026


result = now.toLocaleDateString();
console.log(result)  // 1/28/2026


result = now.toLocaleTimeString();
console.log(result)  // 3:47:28 AM



