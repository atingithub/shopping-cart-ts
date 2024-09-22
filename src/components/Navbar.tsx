import React from 'react';
import { useCart } from './CartProvider';
import { useAuth } from './AuthProvider';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { cartItems } = useCart();
  const { logout } = useAuth();

  return (
    <nav className="navbar">
      <h1>Shopping Cart</h1>
      <div className="navbar-links">
        <span>Cart ({cartItems.length})</span>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
