const express = require('express');
const app = express();
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit');
const router = require('./src/routes/route');
const mongoose = require('mongoose')
require('dotenv').config();

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
	// store: ... , // Use an external store for more precise rate limiting
})

// implement all middleware
app.use(cors())
app.use(helmet())
app.use(express.json()) 
app.use(limiter);



// database connect
mongoose.connect("mongodb+srv://kamrulnew1312:HkEkrzYz8Uw5QPpm@cluster0.zxl9kam.mongodb.net/blog?retryWrites=true&w=majority")
    .then((res) => {
        console.log("Database connect Success")
    })
    .catch((err) => {
        console.log(err)
    })
    

// router handle
app.use("/api/v1",router);


app.use("*",(req,res)=>{
    res.status(404).json({status:"wrong search",data:"Not Found"})
});


module.exports=app
