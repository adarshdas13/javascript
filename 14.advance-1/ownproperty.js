// const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(descriptor);

//getOwnPropertyDescriptor - is used to view the properties of an object
let chai = {
    name: "adrakh chai",
    isAvailable: true,
    price: '80'
}
// console.log(Object.getOwnPropertyDescriptors(chai));

// defineproperty is used to define our own properties in user obj
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptors(chai));

Object.defineProperty(chai, "price", {
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptors(chai));

Object.defineProperty(chai, "isAvailable", {
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptors(chai));
