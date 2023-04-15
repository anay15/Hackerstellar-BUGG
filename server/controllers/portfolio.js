const { query } = require('express');
const mongoose=require('mongoose')
const dotenv = require('dotenv');
const Portfolio=require('../models/Portfolio');


const addPortfolio=async(req,res)=>{
    //console.log(req.body)

    const {user_email,investmentName,investmentAmount,investmentDate,quantity}=req.body;
    
    var currentTime = new Date();
    let data={user_email:user_email,investments:{investmentName:investmentName,investmentAmount:investmentAmount,investmentDate:investmentDate,quantity:quantity},createdAt:currentTime,updatedAt:currentTime}
    var investment={investmentName:investmentName,investmentAmount:investmentAmount,investmentDate:investmentDate,quantity:quantity}
    
    try{
    let port = await Portfolio.findOne({user_email:user_email,investments: {
        $elemMatch: {
          investmentName: investmentName
        }
      }});
    let port2=await Portfolio.findOne({user_email:user_email});

    
        if (port) {
            console.log('in this port ',port)
            //let final_quant=quantity+port.investments.quantity;
            
            await Portfolio.findOneAndUpdate(
                { user_email: user_email,investments: {
                    $elemMatch: {
                      investmentName: investmentName
                    }
                  } },
                { $inc: { 'investments.$.quantity': quantity ,'investments.$.investmentAmount': investmentAmount } }
            )
           
                
                
                return res.status(200).json({
                    ok:true,
                    msg:'updated-quantity'
                })
    
            
        }
        else if(port2){
            await Portfolio.findOneAndUpdate(
                { user_email: user_email },
                { $push: { investments: investment } }
            )
           
                
                
                return res.status(200).json({
                    ok:true,
                    msg:'updated-portfolio'
                })
        }
        
        
        else{
            let port_new=new Portfolio(data);
            console.log(port_new)
            await port_new.save();
            return res.status(200).json({
                ok:true,
                msg:'added'
            })

        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
          ok: false,
          msg: "Please, contact the administrator",
        });
      }

}
const getPortfolio=async(req,res)=>{
    try{
        let query=req.query.email;
        console.log(query)
        const investments=await Portfolio.findOne({user_email:query})
        res.status(200).json(investments)

    }
    catch(error){
        res.json({message:error})
    }
}

module.exports={
    addPortfolio,getPortfolio
    
}

