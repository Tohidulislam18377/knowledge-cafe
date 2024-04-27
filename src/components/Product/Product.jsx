
import './Product.css'
const Product = ({ product,handelClicked,handelAddedBtn }) => {
    const { name, image, date, photo, read, title } = product;
    const handelBtn = handelClicked;
    const handlerBtn = handelAddedBtn;
    return (
        <div>
            <img className='img' src={image} alt="" />
            <div className="product-section">
                <div style={{ display: "flex", alignItems: 'center', columnGap: '15px' }}>
                    <img className='photo' src={photo} alt="" />
                    <div>
                        <p>{name}</p>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='btn-clicked'>
                    <p style={{ paddingRight: '10px' }}>{read}</p>
                    <button onClick={()=>handelBtn(product)}><i className="fa-regular fa-bookmark"></i></button>
                </div>
            </div>
            <h4 className='title'>{title}</h4>
            <button onClick={()=>handlerBtn(product)} className='btn'>Mark as read</button>
        </div>
    );
};

export default Product;