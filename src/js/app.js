const { response } = require("express")

console.log("javaScript")

featch('http://localhost:3000/weather?address=patna').then((response) =>{
    response.json().then((data) =>{
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data)
        }
    })
})
