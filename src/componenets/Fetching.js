import React, { useEffect, useState } from 'react'
import axios from 'axios'
 

const  Fetching = (url) =>{
    const [data,setdata]=useState(null)
     
    useEffect(()=>{
        const fetch=async()=>{
            const configuration={
                method:"Get",
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
            console.log("no data")
          }
    )};
            fetch();
     },[]);
  return {data}
}
export default Fetching