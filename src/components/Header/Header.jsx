import './Header.css'
import img from '../../assets/images/profile.png'

const Header = () => {
    return (
     <>
        <div className='header-section'>
            <div>
                <p>Knowledge Cafe</p>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
        <hr style={{marginTop:'20px', marginLeft:'30px', marginRight:'30px', marginBottom:'30px'}} />
     </>
    );
};

export default Header;