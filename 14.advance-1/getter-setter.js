// getter, setter in js
// constructor by default uses get,set methods on its arguments so when we use get,set on arguments explicitly we get error: call stack maximized/full so we use diffrent name for the arguments while using the methods,also for the method name we use the original argument name to connect it to the method get,set 
class User{
    constructor(name,email,password){
        this.name = name
        this.email = email
        this.password = password
    }
    get password(){
        return this.pass
    }
    set password(val){
        this.pass = `X3${val.toUpperCase()}T7`
    }
}
const user1 = new User("loki","loki@asgard.ai","a1h5")
console.log(user1);
