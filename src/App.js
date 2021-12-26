import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Confirmation from './Confirmation';
import './style.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = ({product, price}) => {
    const found = cartItems.find((each) => each.product === product);
    if (found) {
      const filtered = cartItems.filter((each) => each.product !== found.product);
      console.log(filtered);
      const entry = {
        product: found.product,
        price: found.price,
        quantity: found.quantity + 1
      };
      setCartItems([...filtered, entry]);
    } else {
      const entry = {
        product,
        price,
        quantity: 1
      };
      setCartItems([...cartItems, entry]);
    }
  }

  const increment = (product) => {
    const found = cartItems.find((each) => each.product === product);
    const filtered = cartItems.filter((each) => each.product !== product);
    const entry = {
      product: found.product,
      price: found.price,
      quantity: found.quantity + 1
    };
    setCartItems([...filtered, entry]);
  }

  const decrement = (product) => {
    const found = cartItems.find((each) => each.product === product);
    if (found.quantity > 1) {
      const filtered = cartItems.filter((each) => each.product !== product);
      const entry = {
        product: found.product,
        price: found.price,
        quantity: found.quantity - 1
      };
      setCartItems([...filtered, entry]);
    }
  }

  const removeItem = (product) => {
    const filtered = cartItems.filter((each) => each.product !== product);
    setCartItems(filtered);
  }

  const clearCart = () => {
    setCartItems([]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop addToCart={addToCart} />} />
          <Route 
            path="cart" 
            element={
              <Cart 
                cartItems={cartItems} 
                increment={increment} 
                decrement={decrement}
                removeItem={removeItem}
                clearCart={clearCart}
              />} 
          />
          <Route path="confirmation" element={<Confirmation />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const NotFound = () => {
  return(
    <div>Page Not Found</div>
  );
}

export default App;
