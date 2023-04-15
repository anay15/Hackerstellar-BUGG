import { useEffect, useState } from "react";
import InvestmentCard from "../components/InvestmentCard"
import CarouselComponent from "../components/Carousel";


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

      <div class='container-fluid'>
        
       
         {loaded==1?
            (
                <div class="row row-cols-4">
                {data.map((item) => {
                 
                    return (
                    <div class="col">
                    <InvestmentCard data={item}/>
                    </div>
                    );
            
            
                })}
              </div>
        )
        :<></>}
        
      
       
        </div>
    )



}

export default Investment