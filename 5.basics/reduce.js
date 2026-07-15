//reduce function used to sum the values in arr & return them using acculamator,current value
const nums = [1,2,3,4,5]

//using normal callback func
let total = nums.reduce(function (acc,curr) {
    // console.log(`acc:${acc} curr:${curr}`);
    return acc + curr
},0)
// console.log(total);

//using arrow func - simpler way
total = nums.reduce( (acc,curr) => acc + curr, 0)
// console.log(total);

const shoppingCart = [
    {
        item: "monitor",
        price: 3999.00,
        rating: 4.0,
    },
    {
        item: "mouse",
        price: 999.00,
        rating: 4.2,
    },
    {
        item: "keyboard",
        price: 1999.00,
        rating: 4.7,
    },
    {
        item: "cpu",
        price: 19900.00,
        rating: 4.5,
    }
]

const cartSum = shoppingCart.reduce( (acc,item) => acc + item.price ,0)
console.log(cartSum);
