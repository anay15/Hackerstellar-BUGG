import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Portfolio=()=>{
    const [data,setData]=useState([]);
    const [loaded,setLoaded]=useState(0);
    const user=useSelector((state)=>state.auth.user);
    console.log(data)
    useEffect(()=>{

        if(user){
        let url='/api/portfolio/get?email='+user.email;
        

        (async()=>{
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
    
      }  
      },[user]);

    return(
        <div>

          {loaded==1?<>helo</>:<></>}
         

        </div>
    )

}
export default Portfolio