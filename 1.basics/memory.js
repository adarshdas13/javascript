//stack memory - uses a copy of the memory 
let name = "aegon"
let anotherName = name
anotherName = "aemond"
console.log(name);
console.log(anotherName);

//heap memory - uses the real memory as refrence
let user1 = {
    name: "rahul",
    age: 21,
}
let user2 = user1
user2.age = 28
console.log(user1);
console.log(user2);
