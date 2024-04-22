import React, { useEffect } from 'react'
import { useTheme } from '../../hooks/useTheme'

const Cart = () => {

    const {theme} = useTheme()

    const [cartProducts, setCartProducts]  = React.useState([])
    useEffect(()=>{
        const products = localStorage.getItem("cartProducts");
        // console.log(products);
        setCartProducts(JSON.parse(products))
    },[])

    console.log(theme);
  return (
    <div className={theme}>
      <div>
        {cartProducts.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart