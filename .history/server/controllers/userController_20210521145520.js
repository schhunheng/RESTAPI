const Users = require('../models/userModel');


exports.create= (req,res)=>{
    if(!req.body){
        res.status(400).send({message: `Content cannot empty`})
        return ;
    }
    const user = new Users({
        name : req.body.name,
        email:req.body.email,
        gender: req.body.gender
    })
    user.save(user)
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        });
    })
}
exports.find=(req,res)=>{
    Users.find()
    .then(data=>res.send(data))
    .catch(err=>{
        res.status(500).send({message: err.message})
    })
}

exports.update=(req,res)=>{
    if(!req.body){
        return res.status(400).send({message: "Data to update cannot be empty "})
    }
    const id =req.params.id;
    Users.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
}
