const userinput=document.querySelector("#user-input")
const checkbtn=document.querySelector("#click-me")
const output=document.querySelector("#output")
function changeage(){
    if (userinput.value>=18){
        output.innerText="your eligible"
    }
    else{
        alert("your not eligible")
    }
}



checkbtn.addEventListener("click",changeage)



    




