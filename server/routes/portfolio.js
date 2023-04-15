const { query } = require('express');
const mongoose=require('mongoose')
const dotenv = require('dotenv');
const express=require('express');
const router=express.Router()

const {addPortfolio}=require('../controllers/portfolio');

router.post('/',addPortfolio);

module.exports=router;