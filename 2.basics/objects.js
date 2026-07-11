const blood = Symbol("fire-blood")
const character = {
    name: "aegon",
    surname: "targeyreon",
    age: 22,
    location: "dragonstone",
    title: "aegon-the-usurper",
    [blood]: "fire-blood",
    isAlive: true,
    lastEpAlive: ["ep-1","ep-2","ep-3"]
}
// console.log(character.name,character.surname);
// console.log(character["title"]);
// console.log(character);

// console.log(Object.keys(character));
// console.log(Object.values(character));


const user = {
    email: "stephen@marvel.com",
    heroname: "dr.strange",
    fullname: {
        firstname: "stephen",
        lastname: "strange"
    }
}
// console.log(user.fullname.firstname,user.fullname.lastname);

const obj1 = { 1:"a", 2: "b"}
const obj2 = { 3:"c", 4: "d"}
// const obj3 = Object.assign({}, obj1, obj2) //merging/joining 2 obj
const obj3 = {...obj1, ...obj2} //joining/merging using spread operator
// console.log(obj3);

const course = {
    coursename: "js 101",
    courseinstructor: "documentation",
    price: 999
}
const {courseinstructor:instructor} = course //destructuring a obj
console.log(instructor);


