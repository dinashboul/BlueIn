import { useEffect, useState } from 'react';
import axios from 'axios';

const UseFetch = (url) => {
  const [data,setData]=useState(null)
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url)
        
         setData( result.data);
      } catch (error) {
        console.log("no data fetching")
      }
    };
         fetchData();
      
    
  }, [url]);

  return {data}
};

export default UseFetch;
