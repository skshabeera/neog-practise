const userinput=document.querySelector(".input-user")
const firstbtn=document.querySelector("#first-head")
const secondbtn=document.querySelector("#second-head")
const thirdbtn=document.querySelector("#third-head")
function headingone(){
    userinput.style.fontSize="80px"
}
function headingTwo(){
    userinput.style.fontSize="60px"
}
function headingThree(){
    userinput.style.fontSize="40px"
}
firstbtn.addEventListener("click",headingone)
secondbtn.addEventListener("click",headingTwo)
thirdbtn.addEventListener("click",headingThree)



