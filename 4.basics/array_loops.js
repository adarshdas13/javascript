// for of loop - iterates values over arrays,string,map,sets
const greeting = "hello world"
for (const greet of greeting) {
    if (greet == " ") {
        continue
    }
    // console.log(`each char is ${greet}`);
}

const cart = ["Laptop","Mouse","Keyboard"];
for (const item of cart) {
    // console.log(`Buying ${item}`);
}

//for in loop - iterates over obj keys {obj dont have indexes}
const settings = {
    theme: "dark",
    language: "English",
    notifications: true
};
for (const setting in settings) {
    console.log(`${setting}: ${settings[setting]}`);
}