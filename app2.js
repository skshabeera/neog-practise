const username=document.querySelector(".input-user")
const plusbtn=document.querySelector("#plus-btn")
const subbtn=document.querySelector("#subtraction-btn")
let textSize=16

function addition(){
    textSize = textSize+2
    username.style.fontSize=`${textSize}px`
}
function subtraction(){
    textSize=textSize-2
    username.style.fontSize=`${textSize}px`;
}
plusbtn.addEventListener("click",addition)
subbtn.addEventListener("click",subtraction)
