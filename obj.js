var object=[{
    name:"shabeera",
    value:"True"

},{
    name:"madhavi",
    value:"False"
},{
    name:"vasanth",
    value:"True"
}
]
for(var i =0;i<object.length;i++){
    if (object[i].value==="True"){
        console.log(object[i].name)
    }
}