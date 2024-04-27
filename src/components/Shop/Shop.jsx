
import './Shop.css'
import { useEffect } from "react";
import { useState } from "react";
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [newCart, setNewCart] = useState([]);

    useEffect(()=>{
        fetch('FakeData.json')
        .then(res =>res.json())
       .then(data=>setProducts(data))
    },[])

    const handelClicked = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart)        
    }
    const handelAddedBtn = (allTime)=>{
            const newAddCart = [...newCart,allTime];
            setNewCart(newAddCart)
    }
    return (
        <div>
           <div className='shop-section'>
            <div>
                {
                    products.map(product=><Product 
                    key={product._id}
                    product = {product}
                    handelClicked = {handelClicked}
                    handelAddedBtn = {handelAddedBtn}
                    ></Product>)
                }
            </div>
            <div className='book-mark-section'>
                <p style={{fontSize:'20px', fontWeight:'700', textAlign:'center'}}>Cart section</p>
                <h5 style={{fontSize:'20px', fontWeight:'500'}}>Bookmarked :{cart.length}</h5>
                <Cart 
                cart= {cart}
                newCart = {newCart}
                ></Cart>
            </div>
           </div>
        </div>
    );
};

export default Shop;