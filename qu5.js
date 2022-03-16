const userinput=require("readline-sync")
var avg=0
var winner=""
var higest=0
for(var i=0;i<2;i++){
    var name=userinput.question("enter the  username ")
    var unit_marks=userinput.questionInt("enter the marks ")
    var pre_final_marks=userinput.questionInt("enter the marks")
    var finalmarks=userinput.questionInt("enter the marks")
    var  totalmarks=unit_marks+pre_final_marks+finalmarks
    var avg=totalmarks/3

    if (totalmarks>higest){
        totalmarks=higest
        winner=name
        console.log(totalmarks)
    }
console.log(name,totalmarks)
}

