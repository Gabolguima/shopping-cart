import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { BsCart2 } from 'react-icons/bs';

import './CartButton.css';

function CartButton() {
  
  const {
    cartItems,
    isCartVisible,
    setIsCartVisible
  } = useContext(AppContext);
  
  return (
    <button
      type="button"
      className="cart__button"
      onClick={ () => setIsCartVisible(!isCartVisible) }
    >
      <BsCart2 />
      {cartItems.length > 0 && 
        <span className="cart-status">{cartItems.length}</span>
      }
    </button>
  );
}

export default CartButton;
