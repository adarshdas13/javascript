//in function there is no issue to call it before initializing/declaring it, hoisting is not active
console.log(addone(6) );
function addone(num) {
    return num + 1
}

//we face hoisting error when we use a variable to store the function in it & it cannot be called before initializing/declaring it
// console.log(addtwo(6));
const addtwo = function(num) {
    return num + 2
}