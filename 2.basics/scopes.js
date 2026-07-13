// let,const deined in {} - block scoped, outside is global scope
const a = 121
if (true){
    let a = 23
    // console.log(a);
}
// console.log(a);

{
    const pi = 3.14
}
// console.log(pi);

if (true) {
    const name = "jojo"
    let role = "admin"
    if(name === "jojo"){
        console.log(role);
        const status = true
    }
    // console.log(status);
}