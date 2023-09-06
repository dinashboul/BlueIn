import { useEffect, useState } from 'react';
import axios from 'axios';

const UseFetch = (url) => {
  const [data,setData]=useState(null)
  const [messNotFound,setMessNotFound]=useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url)
        
         setData( result.data);
      } catch (err) {
        setMessNotFound("No Items Found")
        console.log("no data fetching",err)
      }
    };
         fetchData();
      
    
  }, [url]);

  return {data,messNotFound}
};

export default UseFetch;
