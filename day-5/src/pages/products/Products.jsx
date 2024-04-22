import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
    const data = await response.data;
    console.log(data);
    setProducts(data);
  };

  return (
    <div className="wrapper">
      <div className="grid">
        {products.map((item) => (
          <div className="box" key={item.id}>
            <h1>{item.title}</h1>
            <img src={item.images} alt="image" />
            <p>{item.description}</p>
            <button onClick={() => navigate(`/products/${item.id}`)}>
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
