import { useEffect, useState } from "react";
import InvestmentCard from "../components/InvestmentCard"
import CarouselComponent from "../components/Carousel";
import { useSelector } from "react-redux";
import Sort from "../components/Sort";


const Investment=()=>{
    const [data,setData]=useState([]);
    const [loaded,setLoaded]=useState(0);
    const sort=useSelector((state)=>state.filters.sort);
    console.log(sort)
    useEffect(()=>{

        (async()=>{
        let url='/api/investments/'
        if(sort!=''){
          url=url.concat('&sort='+sort)
      }
      console.log(url)

        await fetch(url, {
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
    },[sort]);


    
    return(

      <div class='container-fluid'>
        <div class='row'>


        <div class='col-2'>
          <Sort/>
        </div>

        <div class='col-10'>
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
        
      
       </div>
        </div>
    )



}

export default Investment