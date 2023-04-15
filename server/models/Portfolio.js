const mongoose = require('mongoose');
const Schema=mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const PortfolioSchema = new Schema({
  
  user_email: String,
  investments: [{
    investmentName: String, 
    investmentAmount: Number, 
    investmentDate: String,
    quantity:Number,


  }],
  createdAt: Date,
  updatedAt: Date 
});

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;
