const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    
})

const Users= mongoose.model('users',schema);
module.exports= Users;