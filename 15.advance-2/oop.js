//oop - object oriented programming
const user = {
    username: "loki",
    signedIn: true,
    loginCount: 7
}

//constructor
//new - 1.creates empty obj called instance, 2.a constructor is called, 3.arguments are injected in this keyword, 4.we get the values 
function userDets(username,signedIn,loginCount) {
    this.username = username
    this.signedIn = signedIn
    this.loginCount = loginCount
}

const userone = new userDets("aegon",true,12) 
const usertwo = new userDets("aemond",false,3) 

console.log(userone);
console.log(usertwo);
