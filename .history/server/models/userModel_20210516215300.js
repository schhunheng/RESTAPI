const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type:String,
        required: true,
    },
    email:
})

const Users= mongoose.model('users',schema);
module.exports= Users;