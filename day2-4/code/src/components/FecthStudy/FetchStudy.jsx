import React, { useState, useEffect } from 'react'
import axios from 'axios';


const FetchStudy = () => {
    const [data, setData]= useState()


    useEffect(()=>{
        fetchApi();
    },[])

    const fetchApi = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res.data)

    };

  return (
   
    <button onClick={fetchApi} >Fetch</button>
  )
}

export default FetchStudy