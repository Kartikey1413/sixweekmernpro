const express = require('express');
const myapp = express();
require('dotenv').config();
require('./database/connection');
const port = process.env.port || 9800;



    
myapp.get("/",(req,res)=>{
        res.send("welcome to expres js");
    });


myapp.listen(port,()=>{
    console.log(`server is runing ${port}`);
})