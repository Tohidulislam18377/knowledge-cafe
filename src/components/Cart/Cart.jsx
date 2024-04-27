import './Cart.css'

const Cart = ({cart,newCart }) => {
   
    let totalTitle ;
    for (const product of cart) {
       totalTitle = totalTitle + product.title
    }
    let totalTime = 0
    for (const allProduct of newCart) {
        totalTime = totalTime + allProduct.time;
    }
    return (
        <div>
            <div>
                <p style={{fontSize:'20px', fontWeight:'500'}}>Spent time on read : {totalTime} Minute</p>
            <p className='title-tag'>{totalTitle}</p>
            
            </div>
        </div>
    );
};

export default Cart;