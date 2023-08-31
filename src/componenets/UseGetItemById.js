import { useState } from 'react';
import axios from 'axios';
function UseGetItemById(url) {
    const [isFound,setIsFound]=useState(false)
    console.log(url )
    const fetch=async()=>{
        const configuration={
            method:"Get",
            url:url,
    
          }
          await axios(configuration)
          .then((result)=>
          { console.log("Get data is good")
           setIsFound(true)
          })
          .catch((err)=>
          { setIsFound(false)
        console.log("no data")
      }
  )};
  fetch()  
  return (
    {isFound}
  )
}

export default UseGetItemById