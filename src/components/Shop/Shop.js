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
                <h2>Order summary</h2>
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

            <div className='question-ans-section'>
                <h3>Question and Answer</h3>
                <h4>Q-1: How react works?</h4>
                <p><strong>Ans:</strong> React is basically works by comparing with DOM. There is a virtual DOM Which is compare with original DOM. Both a mostly same. When any data is changed it compares with the virtual DOM And try to find out the changes, catch the changes and update only these data. This ishow it works quickly. </p> <br />
                <h4>Q-2: Difference between props and State?</h4>
                <p><strong>Ans:</strong>state is updateable but props are read only.State is mutable but props is immutable.Props allow to pass data from one component to another component. on the ohter hand State holds the information about the component.Props can be changed by parent Component but state can't be changed by parent Component</p> <br />
                

            </div>
            
        </div>
    );
};

export default Shop;