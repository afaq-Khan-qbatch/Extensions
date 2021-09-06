const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cricketData" , {
    useNewUrlParser:true , 
    useUnifiedTopology:true
}).then(()=>console.log("connected successfully.."))
.catch((err)=> console.log("No Connection" , err));
