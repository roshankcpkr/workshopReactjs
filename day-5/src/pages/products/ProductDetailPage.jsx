import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useParams } from 'react-router-dom';
const ProductDetailPage = () => {

    const {id} = useParams()
    console.log(id);

    const [product, setProduct] = useState({})
    const [cart, setCart] = useState([])

     useEffect(() => {
       fetchProducts(); 

       const savedCart = localStorage.getItem("cartProducts");
       if(savedCart) {
        setCart(JSON.parse(savedCart));
       }
     }, []);

     const fetchProducts = async () => {
       const response = await axios.get(
         `https://api.escuelajs.co/api/v1/products/${id}`
       );
       const data = await response.data;
       console.log(data);
       setProduct(data);
     };

     const handleAddToCrat = () =>{
        console.log("Add to cart");
        const {id, title, price} = product;
        const productToAdd = {id, title, price};
        const newItem = [...cart, productToAdd];
        setCart(newItem);
        localStorage.setItem("cartProducts", JSON.stringify(newItem))
     }
  return (
    <div>
        <h1>{product.title}</h1>
       <p>{product.description}</p>
       <img style={{height:"250px", width:"340px"}} src={product.images} alt="image" />
       <p>{product.price}</p>
       <button onClick={handleAddToCrat} >Add to cart</button>
    </div>
  )
}

export default ProductDetailPage