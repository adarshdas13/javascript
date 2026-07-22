//class in js
// if class were not available we would first create a function called user with same param then using user.prototype we would make new methods one for capitalizing another for encryption nd would call it to a certain user
class User{
    constructor(username,email,pass){
        this.username = username
        this.email = email
        this.pass = pass
    }
    encryptPass(){
        return `${this.pass}x3h0m`
    }
    capital(){
        return `${this.username.toUpperCase()}`
    }
}
const user1 = new User('aemond','aemond@hod.com','987')
console.log(user1.encryptPass());
console.log(user1.capital());


//static function - keyword static
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

// Called DIRECTLY on the class
console.log(MathUtils.add(5, 10)); // Output: 15

// Trying to call it on an instance will throw an error!
const math = new MathUtils();
math.add(5, 10); // TypeError: math.add is not a function