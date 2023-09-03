import  { useEffect, useState } from 'react'
import axios from 'axios'
 

const  Fetching = (url) =>{  
    const [data,setdata]=useState(null)
    useEffect(()=>{
        const fetch=async()=>{
            const configuration={
                method:"GET",
                url:url,
                data:{
                    data
                }
        
              }
              await axios(configuration)
              .then((result)=>
              { console.log("Get data is good")
                setdata(result.data)
              })
              .catch((err)=>
              {err=new Error()
                alert(" No Matching Items")
            console.log("no data")
          }
    )};
   fetch()
            
     },[url,data]);
  return {data}
}
export default Fetching