import  { useEffect, useState } from 'react';
import axios from 'axios';

const UseFetch = (url) => {
  const [data, setdata] = useState(null);
console.log(url)
useEffect(()=>{
  const fetch=async(url)=>{
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
},);
return {data}
}
export default UseFetch;
