//local storage - stors data loxally on a browser, the data stays same even when the browser is cleared, until you clear it
//normally on local storage u cant store any other value other than string to store a array,obj we use JSON.stringify() - to convert the array/obj in string & JSON.parse() - to revert the back the changes while fetching the data

//sroring item
localStorage.setItem("name","loki")
//fetch item
let val = localStorage.getItem("name")
//update item
localStorage.setItem("name","ragnor")
//delete item
localStorage.removeItem("name")

localStorage.setItem("friends", JSON.stringify(["chandan","archit","bala","hemanth"]))
let fr = JSON.parse(localStorage.getItem("friends"))
console.log(fr);

//session storage - stores data temporarily for that session, when the tab, browser is cleared the data is gone
sessionStorage.setItem("name","aemond")
// sessionStorage.clear to clear session

//cookie - stores user credentials ,is it stored in cookie property of the browser when you relad the page/submit a form, can only store lightweight data
document.cookie = "name=loki"
document.cookie = "age=20"