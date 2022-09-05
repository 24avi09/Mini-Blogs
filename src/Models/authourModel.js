const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    fname:{
       type: String,
       required: true 
    },
    lname:{
       type: String,
       required:true 
    },
    title:{
        type:String,
        enum:["Mr","Mrs","Miss"],
        required:true

    },
    email:{
        type:Sring,
        required:true,
        unique:true
    },
    password:{
      type: String,
      trquired:true  
    }



},{timestamps:true});

module.exports=mongoose.model('Mini-author',authorSchema)