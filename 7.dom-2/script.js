// dynamically creating elements - createElement - using prepend,append to push to body
//prepend pushes the element to top
//append pushes the element to bottom

let h1 = document.createElement("h1")
h1.textContent = "dynamically created h1"
h1.style.color = "red"
document.querySelector('body').prepend(h1)

let p = document.createElement("p")
p.textContent = "dynamically created p"
p.style.color = "blue"
document.querySelector('body').append(p)

//remove element - to remove from body
//textcontent changes the text nd ignores tag by printing is along th etext but inner html uses the tag nd makes changes
let h3 = document.querySelector("h3")
//h3.remove() 
h3.innerHTML =  "<i>hey how are you</i>"
h3.style.color = "green"
h3.style.textTransform = "capitalize"

//classlist is used to add a class to an html element externally with add, remove to remove the class, toggle - if it is used ,then it will remove it,if it is not selected it will add it
let h4 = document.querySelector("h4")
h4.classList.add("hulu")
// h4.classList.remove("hulu")

//adding an li to a ul
// let ul = document.querySelector("ul")
// let li = document.createElement("li")
// li.textContent = "you"
// ul.appendChild(li)

let img = document.createElement("img")
img.setAttribute("src","https://imgs.search.brave.com/ifmRCMry-wnoD1drMklwA6J7B09A5LJcjyAwfQtyEfo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2Lzc5LzQ0LzIx/LzM2MF9GXzE2Nzk0/NDIxOTZfT0VzaTBB/RktpZTZoWU1CcHZt/WHd3UmdSWUdWNFU2/THouanBn")
let div = document.querySelector("div").prepend(img)

//adding highlight class to every even li
let li = document.querySelectorAll("ul li:nth-child(2n)")
li.forEach( function(elem) {
    elem.classList.add("highlight")
})