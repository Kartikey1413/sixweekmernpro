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
});



myapp.get("/getalldata",async(req,res)=>{
    const alldata = await mydatapattern.find();
    res.json(alldata);
    console.log(alldata);
});


myapp.get("/view/:id",async(req,res)=>{
    const {id} = req.params;
    const singleuser = await mydatapattern.findById({_id:id});
    console.log(singleuser);
    res.status(201).json(singleuser);
});



myapp.delete("/deleteuser/:id",async(req,res)=>{
    const {id} = req.params;
    const a = await mydatapattern.findByIdAndDelete({_id:id})
    console.log(a);
    res.status(201).json(a);
});

myapp.patch("/updaterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const recordupdate = await mydatapattern.findByIdAndUpdate(id,req.body,{new:true});
    console.log(recordupdate);
    res.status(201).json(recordupdate);
});




// update api
route.patch("/updaterecord/:id",async(req,res)=>{
    const {id} = req.params;
    const recordupdate = await mypatt.findByIdAndUpdate(id,req.body,{new:true});
    console.log(recordupdate);
    res.status(201).json(recordupdate);
});



route.post("/login", async(req,res)=>{
    const {email,pass} = req.body;
      
    if(!email || !pass){
        return res.status(422).json({error:"user and phone no dont match"});
       
    }
    else{
        const uservalidation = await mypatt.findOne({email:email});
        console.log(uservalidation);
        if(uservalidation.email===email && uservalidation.pass===pass)
        {
            res.status(200).json({message:'welcome',status: 201}); 
        }
        else{
            res.status(250).json({error:"password not match"});
        }
    }
});




myapp.listen(port,()=>{
    console.log(`server is runing ${port}`);
})