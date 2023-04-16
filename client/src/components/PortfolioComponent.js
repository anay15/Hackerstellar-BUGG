import { Card } from "react-bootstrap"


const PortfolioComponent=({data})=>{
   
    return(
        <div>
             <Card style={{marginLeft:10,marginTop:10,flex:1}}>
    
            <div class="card-header">
                <h3 class="card-title">{data.name}</h3>
            </div>
            <div style={{padding:5}}>
                <p class="card-text">{data.investmentName}</p>
                <p class="card-text">Amount : {data.investmentAmount}</p>
                <p class="card-text">Quantity : {data.quantity}</p>
                <p class="card-text">Date: {data.investmentDate}</p>
                
            </div>
            
            </Card>
        </div>
    )



}
export default PortfolioComponent