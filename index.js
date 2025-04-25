const express = require('express');
const app = express();

app.get("/home",function(req,res){
    res.json({ message: "welcome to home" });
})




app.listen(4000,function(){
    console.log("server started at 4000");
}) 