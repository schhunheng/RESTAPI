const Products = require('./../models/productModel');

exports.create=(req,res)=>{
    if(!req.body){
        res.status
    }
    const product= {
        name : req.body.name,
        price: req.body.price,
    }
    product.save(product)
    .then((res)=>{
        res.send
    })
}