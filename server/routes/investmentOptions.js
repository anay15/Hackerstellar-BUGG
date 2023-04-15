const express=require('express')
const router=express.Router()

const {getInvestment}=require('../controllers/investmentOptions')

router.get('/',getInvestment);

module.exports=router;