const express=require('express')
require('dotenv').config();
var bodyParser = require('body-parser')
const dotenv=require('dotenv')

const app=express()
const mongoose=require('mongoose');
const InvestmentOption = require('./models/InvestmentOption');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
const investmentRoutes=require('./routes/investmentOptions')
const portfolioRoutes=require('./routes/portfolio')

dotenv.config();                                       
const MONGO_URI = process.env.MONGO_URI;


app.get('/',(req,res)=>{
   console.log(req.body)
   res.json({mssg:'hackerstellar',request:req.body})
})
app.use("/api/auth", require("./routes/auth"));
app.use('/api/investments',investmentRoutes);
app.use('/api/portfolio',portfolioRoutes);

mongoose.connect(MONGO_URI)
    .then(()=>{
        
    app.listen(process.env.PORT,()=>{
        console.log('Listening on port 4000')
    })

    })
    .catch((error)=>{
        console.log(error)
    })