const mongoose = require('mongoose');
const Schema=mongoose.Schema

const investmentOptionSchema = new Schema({
  name: {type:String},
  description:{type:String},
  companySize: {type:String},
  industry: {type:String},
  environmentalImpact:{type:String}, 
  environmentalImpactScore: {type:Number},
  socialImpact:{type:String},
  socialImpactScore: {type:Number}, 
  financialPerformance: {type:Number}, 
  createdAt: {type:Date}, 
  updatedAt: {type:Date},
  investmentPrice:[{investmentPrice:Number,investmentDate:Date}], 
},
{
    collection:'investments'
});

const InvestmentOption = mongoose.model('InvestmentOption', investmentOptionSchema);

module.exports = InvestmentOption;
