import { useEffect, useState } from 'react';
import './App.css';
import Cart from './component/Cart/Cart';
import Navbar from './component/Navbar/Navbar';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

function App() {
 const [guns,setGuns]= useState([]);
 const[carts,setCart]= useState([])
 const [modalIsOpen, setIsOpen] =useState(false);

 function openModal() {
  setIsOpen(true);
}
function closeModal() {
  setIsOpen(false);
}

 
 const countCart = (gun) =>{
   const newCart =[...carts,gun]
  setCart(newCart)

  };

 useEffect(()=>{
   fetch(`data.json`)
   .then(res=>res.json())
   .then(data=>setGuns(data))
 },[])
  
  return (

   

<div className="App">

<Navbar carts={carts}  openModal={openModal}></Navbar>

    
     <div className='card-container'>
       {
       guns.map(gun =><Cart key={gun.id}  countCart={countCart} gun={gun}></Cart>)
     }
     </div>
     <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
     >
       <button onClick={closeModal}>Close</button>
 <div>
     {
 carts.map(cart => <h1 key={cart.id}>{cart.name}</h1>)


}
     </div>
      </Modal>

    </div>
  );
}

export default App;
