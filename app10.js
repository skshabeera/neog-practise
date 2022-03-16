const password=document.querySelector("#user-input")
const checkbtn=document.querySelector("#submit")
const outputBox=document.querySelector("#output")
function passwordgenerate(){
    if (password.value.length>10){
        outputBox.innerText="successful"
    }
    else{
        alert("your given ten character below")
        checkbtn.style.display="none"
    }
}





checkbtn.addEventListener("click",passwordgenerate)