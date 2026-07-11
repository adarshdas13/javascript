// array

// const arr = [1,-7,"yo",false,true]

const arr2 = new Array(1,2,3,4,5,6,7,8,9)

// array methods
// arr2.push(7)
// console.log(arr2);
// arr2.pop()
// console.log(arr2);

// arr2.shift()
// console.log(arr2);
// arr2.unshift(-1)
// console.log(arr2);

const a1 = arr2.slice(1,3)  //manipulates memory copy of array nd makes changes
// console.log("slice",a1);
// console.log("og",arr2);

const a2 = arr2.splice(1,3) //manipulates original memory of array nd makes changes
// console.log("splice",a2);
// console.log("og",arr2);

const marvelHeroes = ["ironman","thor","hulk"]
const dcHeroes = ["flash","batman","superman"]

const heores = [...marvelHeroes, ...dcHeroes]
// console.log(heores);

console.log(Array.isArray("yokasa"));
console.log(Array.from("yokasa"));

