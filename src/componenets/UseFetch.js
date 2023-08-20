import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseFetch = (url) => {
  const [dataUser, setdataUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log("the status is ", response.status);
        console.log("response is  ", response.data);
        setdataUser(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return { dataUser };
}

export default UseFetch;
