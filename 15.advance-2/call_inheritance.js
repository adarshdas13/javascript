//call in js
function setuserName(username) {
    this.username = username
}
function createUser(username,email,pass){
    setuserName.call(this,username)
    this.email = email
    this.pass = pass
}
const user1 = new createUser('jaadu','jaadu@ms.com','123')
// console.log(user1);

//inheritance is js using class
class Student{
    constructor(name){
        this.name = name
    }
    logMe(){
        console.log(`student: ${this.name}`);
    }
}
class Teacher extends Student{
    constructor(name,subject) {
        super(name)
        this.subject = subject
    }
    Info(){
        console.log(`student: ${this.name} attends the subject: ${this.subject}`);
    }
}
const student = new Student('Thor')
student.logMe()
const teacher = new Teacher('Loki','Mystic Arts')
teacher.Info()
