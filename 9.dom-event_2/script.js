// let btn = document.querySelector("#btn")
// let fileinp = document.querySelector("#fileinp")

// btn.addEventListener("click",function(){
//     fileinp.click()
// })

// fileinp.addEventListener("change",function(dets){
//     const file = dets.target.files[0];
//     if(file){
//         btn.textContent = file.name
//     }
// })

// let form = document.querySelector("form")
// let inputs = document.querySelectorAll("input")
// let main = document.querySelector("#main")

// form.addEventListener("submit",function(dets){
//     dets.preventDefault()

//     let card = document.createElement("div")
//     card.classList.add("card")

//     let profile = document.createElement("div")
//     profile.classList.add("profile")

//     let img = document.createElement("img")
//     img.setAttribute("src", inputs[0].value)

//     let h3 = document.createElement("h3")
//     h3.textContent = inputs[1].value
//     let h4 = document.createElement("h4")
//     h4.textContent = inputs[2].value
//     let h5 = document.createElement("h5")
//     h5.textContent = inputs[3].value
//     let p = document.createElement("p")
//     p.textContent = inputs[4].value

//     profile.appendChild(img)
//     card.appendChild(profile)

//     card.appendChild(h3)
//     card.appendChild(h4)
//     card.appendChild(h5)
//     card.appendChild(p)

//     main.appendChild(card)
//     inputs.forEach( (dets) => {
//         dets.value = "";
//     })
// })

//event capturing,bubbling - 2 phases of event execution
//capturing - Event starts at the top (document) and travels down to the target element. Enable with addEventListener(callback, true)
//bubbling - Event starts at the clicked element and bubbles up through parent elements. Handlers on parents fire after the target.
let a = document.querySelector(".a")
let b = document.querySelector(".b")
let c = document.querySelector(".c")
let btn = document.querySelector("button")

btn.addEventListener("click",function(){
    console.log("button clicked");
})
c.addEventListener("click",function(){
    console.log("c clicked");
},true)
b.addEventListener("click",function(){
    console.log("b clicked");
})
a.addEventListener("click",function(){
    console.log("a clicked");
},true)