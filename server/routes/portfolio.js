const { query } = require('express');
const mongoose=require('mongoose')
const dotenv = require('dotenv');
const express=require('express');
const router=express.Router()

const {addPortfolio, getPortfolio}=require('../controllers/portfolio');

router.post('/',addPortfolio);
router.get('/get',getPortfolio);

module.exports=router;