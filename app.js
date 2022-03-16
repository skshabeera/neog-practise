const number=document.querySelectorAll(".user-numbers")
const additionbtn=document.querySelector("#plus-symbol")
const subtractionbtn=document.querySelector("#minus-symbol")
const multiplicationbtn=document.querySelector("#multiplication-symbol")
const divisionbtn=document.querySelector("#division-symbol")
const output=document.querySelector("#output")
function addition(){
    var sum=Number(number[0].value)+Number(number[1].value)
    output.innerText="the sum of the numbers "+ sum   

}
function subtraction(){
    var sub=Number(number[0].value)-Number(number[1].value)
    output.innerText="the subtraction of the numbers "+ sub  
    // console.log(sub)    

}
function multiplication(){
    var mul=Number(number[0].value)*Number(number[1].value)
    output.innerText="the multiplication of the numbers "+ mul 
    // console.log(mul)   

}
function division(){
    
    var div=Number(number[0].value)/Number(number[1].value)
    output.innerText="the division of the numbers " + div
    // console.log(div)    

}

additionbtn.addEventListener("click",addition)
subtractionbtn.addEventListener("click",subtraction)
multiplicationbtn.addEventListener("click",multiplication)
divisionbtn.addEventListener("click",division)



