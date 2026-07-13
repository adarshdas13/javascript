//immediately invoked function expression iife
//we face problems from global scope , to remove pollution in the global scope we use iife

(function chai(){
    //named iife
    console.log("DB connected");
})();
// ()() we wrap a function in the 1st paranthesis nd call the function in 2nd one

((part) => {
    //unnamed iife
    console.log(`${part} connected`);
})("backend");