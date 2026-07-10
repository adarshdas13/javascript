let date = new Date()
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toString());
console.log(date.toJSON());

let myDate = new Date(2029,7,21)
console.log(myDate.toDateString());

myDate = new Date("1-4-2027")
console.log(myDate.toDateString());

let myTimestamp = Date.now()
console.log(Math.floor(myTimestamp));

date = new Date()
console.log(date.getFullYear());



