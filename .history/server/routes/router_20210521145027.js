const express= require('express');
const route = express.Router();

const userController = require('../controllers/userController');


// User API 
route.post('/api/users',userController.create);
route.get('/api/users',userController.find);
route.put('/api/users',userController.update);
route.delete()


module.exports = route