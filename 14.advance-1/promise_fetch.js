//promise function - used to call api,fetch data,access it & display it
//1 way of doing promise
// let promiseone = new Promise(function (resolve,reject){
//     setTimeout( () => {
//         console.log("async task 1");
//         resolve() // calls the resolve .then method
//     },2000)
// })
// promiseone.then(function () {
//     console.log("promise completed");
// })

//2nd way of using promise
// new Promise(function (resolve,reject){
//     setTimeout(() => {
//         console.log("async task 2");
//         resolve()
//     },2000)
// }).then(() => {
//     console.log("promise completed");
// })

// joint promises with error handaling, reject, catch, finally used
// let promisetwo = new Promise(function (resolve,reject){
//     setTimeout(() => {
//         console.log("user details");
//         resolve({username:"loki",email:"loki@example.com"})
//     },1500)
// })
// promisetwo.then(function(user) {
//     console.log(user);
// })

// let promisethree = new Promise(function (resolve,reject){
//     setTimeout(() => {
//         let err = false
//         if (!err) {
//             resolve({password:1234})
//         } else {
//             reject('ERROR: something went wrong!')
//         }
//     },1500)
// })
// const password = promisethree.then((user) => {
//     return user.password
// }).then((password) => {
//     console.log(`password: ${password}`);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => console.log("promise is resolved"))

let promisefour = new Promise(function (resolve,reject){
    setTimeout(() => {
        let err = false
        if (!err) {
            resolve({role:'admin',isloggedin:true})
        } else {
            reject('ERROR: cant retrive role/logged in status!')
        }
    },1500)
})

//error handaling using async,await
async function consumepromise(){
    try {
        const response = await promisefour
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumepromise()

//api call using async await
// async function getallusers() {
//     try{
//         const response = await fetch('https://api.github.com/users/adarshdas13')
//         const data = await response.json()
//         console.log(data);
//     } catch (err) {
//         console.log('E: ',err);   
//     }
// }
// getallusers()

//api call using fetch
fetch('https://api.github.com/users/adarshdas13')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
})
.catch((err) => console.log(err))