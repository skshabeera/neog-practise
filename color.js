const button=document.querySelector("#check-color")
const input=document.querySelector("#color-change")
var changing=1
function change(c){
    if (c===1){
        return "red"
    }
    else if (c===2){
        return "blue"
    }
    else if(c===3){
        return "pink"

    }


}
button.addEventListener("click", function cha(){
    input.style.color=change(changing)
    changing++
})