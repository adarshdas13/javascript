// function add2Numbers(a,b){
//     console.log(a + b)
// }
// add2Numbers(7,7)

function add2Numbers(a,b){
    return a + b
}
let result = add2Numbers(7,3)
// console.log("result:",result);

function loginStatus(username) {
    return `${username} just logged in`
}
// console.log(loginStatus("aegon"));

function calculateCartPrice(...item1) {
    return item1
}
// console.log(calculateCartPrice(299,375,499,659));

function calculateCartPrice(item1,item2,...item3) {
    return item3
}
// console.log(calculateCartPrice(299,375,499,659));   //299 -> item1, 375 -> item2, rest r in rest operator item3

// passing values through obj
const user = {
    name: "aegon",
    title: "the-usurper"
}

function handleObject(anyobject) {
    console.log(`His name is ${anyobject.name} & title is ${anyobject.title}`);
}
// handleObject(user)

// passing values through obj in function directly
handleObject({
    name: "sam",
    title: "tarley"
})

// passing values through array
const newArr = [200,400,600,800]
function returnSecondValue(getArr){
    return getArr[1]
}
// console.log(returnSecondValue(newArr));
// console.log(returnSecondValue([200,1,600]));
