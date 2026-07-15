//map
const map = new Map()
map.set('IN','India')
map.set('JP','Japan')
map.set('RU','Russia')
for (const [key,value] of map) {
    // console.log(key,':',value);
}

//for each
const coding = ["js","ruby","java","cpp","c","python"]
coding.forEach(function (val,index,arr) {
    // console.log(val,index,arr);
})

// 1 way of printing array value using callback fun
// coding.forEach(function (val) {
//     console.log(val);
// })

//2nd way using a fun name as refernce in callback
// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)

//3rd way is by arrow fun
// coding.forEach((val) => {
//     console.log(val);
// })

const arrObj = [
    {
        lang:"python",
        extension:"py",
    },
    {
        lang:"java",
        extension:"java",
    },
    {
        lang:"javascript",
        extension:"js",
    }
]
arrObj.forEach( (item) => {
    // console.log(item.lang);
})

//map in array
const nums = [1,2,3,4,5,6,7]
// let newNums = nums.map( (num) => num + 8)
// console.log(newNums);

// if we use {} in a function we must use return ,if we dont we get undefined values

//map chaining - we can use filter too in the chaining
let newNums = nums.map( (num) => num * 11).map( (num) => num + 1).filter( (num) => num >= 40)
console.log(newNums);
