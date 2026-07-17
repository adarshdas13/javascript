// let h1 = document.querySelector("h1")
// h1.addEventListener("click",h1click)
// function h1click(){
//     h1.style.color = "red"
//     h1.style.textTransform = "capitalize"
// }

let p = document.querySelector("p")
p.addEventListener("click",pclick)
function pclick(){
    p.style.color = "blue"
    p.style.fontSize = "20px"
}
p.addEventListener("dblclick",dblclick)
function dblclick(){
    p.style.color = "magenta"
    p.removeEventListener("dblclick",dblclick)
}

//input - event listener
let input = document.querySelector("input")
input.addEventListener("input",function (dets){
    if(dets.data !== null){
        console.log(dets);
    }
})

//change event
let select = document.querySelector("select")
let device = document.querySelector("#device")
select.addEventListener("change",function(dets){
    device.textContent = `${dets.target.value} device selected`
})

//keydown event
let h1 = document.querySelector("h1")
window.addEventListener("keydown",function (dets){
    if(dets.key === " "){
        h1.textContent = "space"
    } else {
    h1.textContent = dets.key
    }
})