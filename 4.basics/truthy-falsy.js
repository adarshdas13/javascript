// falsy values - NaN,0,false,-0,0n,null,"",undefined
//truthy values - "0",1,'false'," ",[],{},function(){}

userEmail = []
if (userEmail.length === 0) {
    console.log("empty array");
}
userObj = {}
if (Object.keys(userObj).length === 0) {
    console.log("empty object");
}

//nullish coalescing operator (??); null undefined
let val1 = null ?? 10
let val2 = undefined ?? 7
let val3 = undefined ?? null 
console.log(val1);
console.log(val2);
console.log(val3);

//ternary operator
//condition ? true : false
const age = 18
age >= 18 ? console.log("adult") : console.log("minor");

