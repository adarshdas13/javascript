// mouse.addEventListener("mouseover", function(){
//     mouse.style.backgroundColor = "blue"
// })
// mouse.addEventListener("mouseout", function(){
//     mouse.style.backgroundColor = "yellow"
// })

//mouse follow up
// let mouse = document.querySelector(".mouse");

// window.addEventListener("mousemove", function(dets){
//     mouse.style.left = dets.clientX + "px";
//     mouse.style.top = dets.clientY + "px";
// });

//dets - event obj

//event bubbling - if an element does not have a event listerner it will go check its parent for a event listerner if present it will be executed if not it goes to the main element
// document.querySelector(".nav").addEventListener("click",function (){
//     alert("clicked")
// })

//strike through design
// let ul = document.querySelector("ul")
// ul.addEventListener("click",function (dets){
//     dets.target.classList.toggle("lt")
// })

//character count
let inp = document.querySelector("input")
let span = document.querySelector("span")
inp.addEventListener("input",function (){
    span.textContent = inp.value.length
})