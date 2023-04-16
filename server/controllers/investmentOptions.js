const { query } = require('express');
const mongoose=require('mongoose')
const dotenv = require('dotenv');
const InvestmentOption = require('../models/InvestmentOption');

const getInvestment=async(req,res)=>{
   
    try{
        console.log('req',req.query)

    //pagination for infinite scrolling
    //let page = req.query.page??1;
    let limit = 30;

    let query={};
    let sort={};
   
    //search for product
    /* if(req.query.search!=undefined){
        if(req.query.search!=''){
            let search=req.query.search.replaceAll("'","")
            let query2={}
            let query3={}
            query2['Description']={'$regex':search,'$options':'i'}
            query3['Title']={'$regex':search,'$options':'i'}
            query['$or']=[query3,query2]
        }
    }

    //sort for product
    if(req.query.sort!=undefined){
        if(req.query.sort!=''){
            console.log('sort s thus ',req.query.sort)
            switch(req.query.sort){
                case 'asc':{
                    sort={'CurrentPrice':1}
                    break;
                }
                case 'desc':{
                    sort={'CurrentPrice':-1}
                    break;
                }
            }

        }
    } */

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
                }
    
            }
        }

        if(req.query.search!=undefined){
            if(req.query.search!=''){
                query={
                    name:req.query.search}
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

