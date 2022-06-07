import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const { increment, decrement, removeItem, clearCart } = props;
  const cart = props.cartItems;

  const cartTotal = cart.reduce((prev, curr) => {
    return prev + curr.price * curr.quantity;
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
    navigate("../Confirmation");
    clearCart();
  };

  return (
    <div className="cart-page">
      <h1 className="cart-page-h1">Shopping Cart</h1>
      <table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th className="quantity-header-cell">QNTY</th>
            <th>TOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.price} Gold</td>
                <td className="quantity-btn-cell">
                  <button onClick={() => increment(item.product)}>+</button>
                  {item.quantity}
                  <button onClick={() => decrement(item.product)}>-</button>
                </td>
                <td>{item.quantity * item.price}</td>
                <td>
                  <button onClick={() => removeItem(item.product)}>
                    Clear
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="cart-total">
        <div>Total: {cartTotal} Gold</div>
        <button onClick={handlePurchase}>Purchase</button>
      </div>
    </div>
  );
};

export default Cart;
