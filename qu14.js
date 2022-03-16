function moreage(){
    objectOne={"name":"shabeera","age":39,"yuga":"tripta"}
    objectTwo={"name":"srilatha","age":22,"yuga":"dwapara"}
    for (i in objectOne){
        if(objectOne.age>objectTwo.age){
            return objectOne.age
        }
        else{
            return objectTwo.age
        }
    }

}
console.log(moreage())