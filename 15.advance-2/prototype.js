// Prototype in js
// Object.prototype is the root element in Js inheritance hierarchy.
// Any property/method added to Object.prototype is automatically accessible by plain Objects, Arrays, Strings &Functions.
// flow : array,object,function,string -> object.prototype -> null
// Modifying built-in prototypes directly (prototype pollution) is usually avoided in production to prevent unintended bugs or conflicts with third-party libraries.

let heroes = ["thor","hulk"]
let heroPower = {
    thor: "hammer",
    hulk: "smash"
}

Object.prototype.info = function(){
    console.log("thor god of thunder");
    console.log("hulk the strongest beast");
}
// heroes.info()
// heroPower.info()

Array.prototype.ability = function(){
    console.log("thor: lightling/thunder");
    console.log("hulk: super strenght,body");
}
// heroes.ability()

let name = '   loki   '
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length: ${this.trim().length}`);
}
name.trueLength()
"jaadu".trueLength()
"kala_papitha".trueLength()