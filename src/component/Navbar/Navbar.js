import React from 'react';
import{BsFillCartFill} from 'react-icons/bs'
import './Navbar.css'
const Navbar = (props) => {
     const {carts} =props
    return (
        <div className='navbar'>
            <h1>Khupa Sumso Gun Store</h1>
                  <div className='cart-counter' onClick={props.openModal} >
            <button > <BsFillCartFill className='icon' /><span>{carts.length}</span></button>
        
        </div>
      
        </div>

    );
};

export default Navbar;