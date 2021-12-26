import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = (props) => {
  const { increment, decrement, removeItem, clearCart } = props;
  const cart = props.cartItems;
  const cartTotal = cart.reduce((prev, curr) => {
    return prev + (curr.price * curr.quantity);
  }, 0);
  cart.sort((a, b) => {
    if (a.prduct < b.product) {
      return -1;
    }
    if (a.product > b.product) {
      return 1;
    }
    return 0;
  });

  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate('../Confirmation');
    clearCart();
  }

  return(
    <div className="cart-page">
      <h1>Cart Component</h1>
      <div className="cart-card">
        <div className="cart-field">Product</div>
        <div className="cart-field">Price</div>
        <div className="cart-field">Total</div>
        <div className="cart-field">Qnty</div>
        <div>Remove</div>
      </div>
        {cart.map((item, index) => {
          return <div key={`cart${index}`} className="cart-card">
            <div className="cart-field">{item.product}</div>
            <div className="cart-field">{item.price} gold</div>
            <div className="cart-field">{item.quantity * item.price}</div>
            <div className="cart-field">
              <button onClick={() => increment(item.product)}>+</button> 
              {item.quantity} 
              <button onClick={() => decrement(item.product)}>-</button>
            </div>
            <button onClick={() => removeItem(item.product)}>Remove</button>
          </div>
        })}
        <div className="cart-total">
          <div>Total: {cartTotal}</div>
          <button onClick={handlePurchase}>Purchase</button>
        </div>
    </div>
  );
}

export default Cart;