import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [] = useState([]);
    const[cart,setCart] = useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json ())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) =>{
        console.log(product);
        const newCart=[...cart,product];
        setCart(newCart);

    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>order summary</h3>
                {
                    cart.map((product,index) =><Cart 
                    key={index}
                    
                    product={product}
                    ></Cart>)
                }
                {/* <p>Selected Item:{cart.length}</p> */}
            </div>
        </div>
    );
};

export default Shop;