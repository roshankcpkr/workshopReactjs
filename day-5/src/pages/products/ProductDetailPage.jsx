import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useParams } from 'react-router-dom';
const ProductDetailPage = () => {

    const {id} = useParams()
    console.log(id);
    const [product, setProduct] = useState({})
     useEffect(() => {
       fetchProducts();
     }, []);

     const fetchProducts = async () => {
       const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
       const data = await response.data;
       console.log(data);
       setProduct(data);
     };
  return (
    <div>
        <h1>{product.title}</h1>
       <p>{product.description}</p>
       <img src={product.image} alt="image" />
       <p>{product.price}</p>
    </div>
  )
}

export default ProductDetailPage