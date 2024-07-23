const mongoose = require('mongoose');

const mydatatype = new mongoose.Schema({
    email:{
        type:String
    },
    fullname:{ 
        type:String
    },
    dob:{ 
        type:String
    },
    course:{ 
        type:String
    },
    pass:{ 
        type:String
    },
    gender:{ 
        type:String
    }

})

const mydatapattern = new mongoose.model("sixweekdata",mydatatype);
module.exports = mydatapattern;