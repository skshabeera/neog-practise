function morepower(){
     var object={"name":"anusha","power":2325,"yuga":"treta"}
     var objectone={"name":"madhavi","power":3000,"yuga":"dwapara"}
        if(object.power>objectone.power){
            console.log( "the person" , `${object.name}`,"the power of the person is", `${object.power}`)
        }
        else{
            console.log( "the person", `${objectone.name}`,"the power of the person is",`${objectone.power}`)
        }
    }
morepower()