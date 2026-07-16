//dom manipluation
let p = document.getElementById("para")
p.innerHTML = "learning dom element selection, element manipulation"
p.style.color = "red"

let h2 = document.getElementsByClassName("heading")
h2[0].innerHTML = "changing color, size, position"
h2[0].style.color = "magenta"

let h1 = document.getElementById("h1")
h1.style.color = "blue"

//set,get,remove attribute
//get attribute is used to pull a attribute. from a element
//set attribute is used to set the attribute of an element using 2 parameter the - qualifiedname, value is ""

let a = document.querySelector("a")
// a.removeAttribute("href")
// a.getAttribute("href")
a.setAttribute("href","https://www.google.com")

let img = document.querySelector("img")
img.setAttribute("src","https://images.unsplash.com/photo-1784050982988-0c114c9dd6ac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
img.style.width = "300px";
img.style.height = "300px";
