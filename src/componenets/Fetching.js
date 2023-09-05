import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Fetching = (url) => {
  const dataRef = useRef(null);
  const [messError, setMessError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url)
        console.log("Get data is Done")
        dataRef.current = await result.data;
        setIsLoading(false);
      } catch (error) {
        setMessError('No Matching Items');
      }
    };

    setTimeout(async () => {
      try {
        await fetchData();
        setIsLoading(false)
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    }, 2000);
    
  }, [url]);

  return {
    data: dataRef.current,
    isLoading,
    error: messError,
  };
};

export default Fetching;
