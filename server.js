const express = require('express');
const dotenv=require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
dotenv.config({path:'config.env'})
const PORT = process.env.PORT;
const connectDB = require('./server/database/connection')
const app = express();

// Connect Database
connectDB();

// Log Request 
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT,()=>{
    console.log(`Server is running http://localhost:${PORT}`);
})