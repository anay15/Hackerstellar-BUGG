import { useEffect } from "react";

const InvestmentCard=({data})=>{
    console.log(1)



    

   /*  const data={
        "_id": "643a41c9d75de9607b624b85",
        "name": "Unilever",
        "description": "Consumer goods company",
        "companySize": "Large",
        "industry": "Consumer Goods",
        "environmentalImpact": "Reducing plastic waste through sustainable packaging initiatives",
        "environmentalImpactScore": 8,
        "socialImpact": "Supporting education and health initiatives, empowering women in the workplace",
        "socialImpactScore": 8,
        "financialPerformance": 7,
        "createdAt": "2022-05-19T09:10:12.345Z",
        "updatedAt": "2022-06-20T18:05:27.592Z",
        "investmentPrice": [
            {
                "_id": "643a443316f528cd57cabd56",
                "investmentPrice": 50,
                "investmentDate": "2021-05-20T00:00:00.000Z"
            },
            {
                "_id": "643a443316f528cd57cabd57",
                "investmentPrice": 55,
                "investmentDate": "2021-07-20T00:00:00.000Z"
            },
            {
                "_id": "643a443316f528cd57cabd58",
                "investmentPrice": 60,
                "investmentDate": "2021-09-20T00:00:00.000Z"
            }
        ]
    }
 */

    return(
       
            <div class="card">
    <div class="card-header">
        <h3 class="card-title">{data.name}</h3>
    </div>
    <div class="card-body">
        <p class="card-text">Description: {data.description}</p>
        <p class="card-text">Company Size: {data.companySize}</p>
        <p class="card-text">Industry: {data.industry}</p>
        <p class="card-text">Environmental Impact: {data.environmentalImpact}</p>
        <p class="card-text">Environmental Impact Score: {data.environmentalImpactScore}</p>
        <p class="card-text">Social Impact: {data.socialImpact}</p>
        <p class="card-text">Social Impact Score: {data.socialImpactScore}</p>
        <p class="card-text">Financial Performance: {data.financialPerformance}</p>
        <p class="card-text">Created At: {data.createdAt}</p>
        <p class="card-text">Updated At: {data.updatedAt}</p>
        
    </div>
    </div>
   
    );

}

export default InvestmentCard