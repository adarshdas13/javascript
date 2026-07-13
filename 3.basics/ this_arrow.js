// this - refers to current function context
const user = {
    username: "aegon",
    price: 799,

    welcomeMessage: function() {
        console.log(`welcome ${this.username} to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "aemond"
// user.welcomeMessage()

// this cannot be used in a function directly
function chai(){
    let username = "aemond"
    console.log(this.username);
}
// chai()
const chai1 = function(){
    let username = "aemond"
    console.log(this.username);
}
// chai1()

// arrow functon - this does not work
// const character = () => {
//     let name = "aemond"
//     console.log(this.name);
// }
const character = (name) => {
    return name
}
// character()

//implict arrow function {} r not needed & can be used in 1 line no return needed
// if we wrap the parameter in () return is not needed
// if we use {} we need to use return
const person = (name) => name
console.log(person("loki"));

const person2 = () => ({name: "rokan"})
console.log(person2());
