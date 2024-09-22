// src/components/Cart.tsx
import React from 'react';
import { useCart } from './CartProvider';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
