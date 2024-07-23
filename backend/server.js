const express = require('express');
const cors = require('cors');


const myapp = express();
require('dotenv').config();
require('./database/connection');
const port = process.env.port || 9800;

const mydatapattern = require('./myschimatype/schimatype');

myapp.use(express.json());
myapp.use(cors());



    
myapp.get("/",(req,res)=>{
        res.send("welcome to expres js");
    });


myapp.post("/registorpage",async(req,res)=>{
    const {email,fullname,dob,course,pass} = req.body;
    const adduser = new mydatapattern({
        email,fullname,dob,course,pass
    });
    await adduser.save();
    res.status(200).json(adduser);
    console.log(adduser);
})



myapp.listen(port,()=>{
    console.log(`server is runing ${port}`);
})