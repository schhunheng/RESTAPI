const express= require('express');
const route = express.Router();

const userController = require('../controllers/userController');
const productController = require("../controllers/productController");


// User API 
route.post('/api/users',userController.create);
route.get('/api/users',userController.find);
route.put('/api/users/:id',userController.update);
route.delete('/api/users/:id',userController.delete)

// Products API
route.post('api/products',productController.create)

module.exports = route