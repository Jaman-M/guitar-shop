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
        // console.log(product);
        if((cart.length<4)){
            const newCart=[...cart,product];
        setCart(newCart);
        }

    }

    const randomItem=()=>{
        const myCart = [];
        const randomItem=Math.floor(Math.random()*cart.length);
        myCart.push(cart[randomItem]);
        setCart(myCart);
    }
    const removeItem=()=>{
        setCart([])
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
                    removeItem={removeItem}
                    ></Cart>)
                }
                {/* <p>Selected Item:{cart.length}</p> */}
                <button className='btn' onClick={()=>randomItem()}>Choose 1 </button>
                <button className='btn' onClick={()=>removeItem()}>Choose Again</button>
            </div>
            <div className="cart-container">
                <h3>order summary</h3>
                {
                    cart.map((product,index) =><Cart 
                    key={index}
                    
                    product={product}
                    removeItem={removeItem}
                    ></Cart>)
                }
                {/* <p>Selected Item:{cart.length}</p> */}
                <button className='btn' onClick={()=>randomItem()}>Choose 1 </button>
                <button className='btn' onClick={()=>removeItem()}>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;