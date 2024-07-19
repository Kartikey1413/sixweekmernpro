const mongoose = require('mongoose');
const db = process.env.database;


mongoose.connect(db).then(()=>{
    console.log("database connection");
})


