const { query } = require('express');
const mongoose=require('mongoose')
const dotenv = require('dotenv');
const InvestmentOption = require('../models/InvestmentOption');

const getInvestment=async(req,res)=>{
   
    try{
        console.log('req',req.query)

    
    let limit = 30;

    let query={};
    let sort={};
   
   if(req.query.search!=undefined){
        if(req.query.search!=''){
            let search=req.query.search.replaceAll("'","")
            let query2={}
            query2['name']={'$regex':search,'$options':'i'}
            query=query2
        }
    }

    //send request
    
        if(req.query.sort!=undefined){
            console.log('sort type is',req.query.sort)
            if(req.query.sort!=''){
                console.log('sort s thus ',req.query.sort)
                switch(req.query.sort){
                    case 'asc':{
                        sort={'environmentalImpactScore':1}
                        break;
                    }
                    case 'desc':{
                        sort={'environmentalImpactScore':-1}
                        break;
                    }
                    case 'asc_social':{
                        sort={'socialImpactScore':1 }
                        break;
                    }
                    case 'desc_social':{
                        sort={'socialImpactScore':-1}
                        break;
                    }
                    case 'asc_finance':{
                        sort={'financialPerformance':1}
                        break;
                    }
                    case 'desc_finance':{
                        sort={'financialPerformance':-1}
                        break;
                    }
                }
    
            }
        }


    console.log('query is ',query)
    console.log('sort type is ',sort)
    const investments=await InvestmentOption.find(query).sort(sort)
    res.status(200).json(investments)
    
}
    catch(error){
        res.json({message:error})
    }
}




module.exports={
    getInvestment,
    
}

