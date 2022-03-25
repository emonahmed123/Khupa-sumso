import React from 'react';
import './Card.css'
import{BsFillCartFill} from 'react-icons/bs'
const Cart = ({gun, countCart}) => {
   
  
     const {price,name,bullet,capacity,img,action}=gun;
    
    return (
        <div className='card'>
        <div className='image-container'>
            <img src={img}  alt=''/>
        </div>
      <div className='gun-info'>
       <h1>{name}</h1>
       <p>Bullet Type :{bullet}</p>
       <p> Capacity:{capacity} </p>
       <p>  Action:{action}</p>
       </div>
        <div className='add-to-cart'>
          <button onClick={() => countCart(gun)}><BsFillCartFill  className='icon'/></button>
          <h1>${price}</h1>
        </div>
  

           
        </div>
    );
};

export default Cart;

//