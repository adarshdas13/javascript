// filter
const nums = [1,2,3,4,5,6,7]

// using implict function
const newNums = nums.filter((num) => num > 4)
// console.log(newNums);

//using arrow function with scope
// let newNum = nums.filter((num) => {
//     return num > 4
// })

//using for each loop
// let newNum = []
// nums.forEach( (num) => {
//     if(num > 4) {
//         newNum.push(num)
//     }
// })
// console.log(newNum);

const animeList = [
  {
    id: 1,
    title: "Naruto",
    genre: "Action",
    rating: 8.4,
    completed: true
  },
  {
    id: 2,
    title: "Attack on Titan",
    genre: "Action, Dark Fantasy",
    rating: 9.1,
    completed: true
  },
  {
    id: 3,
    title: "One Piece",
    genre: "Adventure",
    rating: 9.0,
    completed: false
  },
  {
    id: 4,
    title: "Demon Slayer",
    genre: "Action, Fantasy",
    rating: 8.7,
    completed: false
  },
  {
    id: 5,
    title: "Jujutsu Kaisen",
    genre: "Action, Supernatural",
    rating: 8.8,
    completed: false
  },
  {
    id: 6,
    title: "Death Note",
    genre: "Thriller",
    rating: 9.0,
    completed: true
  },
  {
    id: 7,
    title: "Fullmetal Alchemist: Brotherhood",
    genre: "Adventure, Fantasy",
    rating: 9.2,
    completed: true
  }
];

let userAnimeList = animeList.filter( (anime) => anime.genre.includes('Action'))
// console.log(userAnimeList);
userAnimeList = animeList.filter( (anime) => anime.completed === true)
// console.log(userAnimeList);
userAnimeList = animeList.filter( (anime) => anime.rating >= 9.0)
// console.log(userAnimeList);
