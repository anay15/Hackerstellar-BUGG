import { useEffect, useState } from "react";
import InvestmentCard from "../components/InvestmentCard"


const Investment=()=>{
    const [data,setData]=useState([]);
    const [loaded,setLoaded]=useState(0);
    console.log(data)
    useEffect(()=>{

        (async()=>{
        await fetch('/api/investments/', {
            method:'GET',
             headers: {
               "Content-Type": "application/json",
             },
          
           }).then((resp) =>(resp.json()))
           .then((data) => {
             
            
            if(data) {setData(data);setLoaded(1)}
     
             
              else {
               if (data.errors) console.log(data.errors);
               
             }
           })
        })();
        return () => {
            // this now gets called when the component unmounts
          };
    },[]);


    
    return(
        <div>
         {loaded==1?
            (
                <div>
                {data.map((item) => {
                    console.log('item is ',item)
                    return (
                    <div>
                    <InvestmentCard data={item}/>
                    </div>
                    );
            
            
        })}</div>
        )
        :<></>}
        
      
        </div>
    )



}

export default Investment