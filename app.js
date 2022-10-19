const express = require("express");
const morgan =require('morgan')
const MenuRoutes =require('./api-routes/menu-api-rouets')
const cors = require("cors");
const app = express();



app.use(express.urlencoded({extended:true}))
app.use(express.json())


// adding morgan to log HTTP requests
app.use(morgan('dev'))

//handling the cros errro
app.use(cors());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });


app.use('/api/v1',MenuRoutes)

// Page Not Found Error
app.use('*',(req,res,next)=>{
    next(new Error(`can't find ${req.originalUrl} on this server`,404))
})




module.exports =app