const username=document.querySelector(".user-input")
const bluebtn=document.querySelector("#blue-btn")
const redbtn=document.querySelector("#red-btn")
const greenbtn=document.querySelector("#green-btn")
// var color=["blue","green","red"]
function  bluecolor(){
    username.style.color="blue";
    
}

function  redcolor(){
    username.style.color="red"
}
function  greencolor(){
    username.style.color="green"
}



bluebtn.addEventListener("click",bluecolor)
redbtn.addEventListener("click",redcolor)
greenbtn.addEventListener("click",greencolor)

