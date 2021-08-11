const express= require('express');
const route = express.Router();

const userController = require('../controllers/userController');
const productController = require('../controllers/productController')


route.get('/',(req,res)=>{
    res.status(200).send({message: 'api/users'})
});
// User API 
route.post('/api/users',userController.create);
route.get('/api/users',userController.find);
route.delete('/api/users/:id',userController.delete);
route.put('/api/users/:id',userController.update);


// Product API
route.post('/api/products',productController.create);
route.get('/api/products',productController.find);
module.exports = route