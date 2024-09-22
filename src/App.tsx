import React from 'react';
import { AuthProvider, useAuth } from './components/AuthProvider';
import { CartProvider } from './components/CartProvider';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

const MainApp: React.FC = () => {
  return (
    <CartProvider>
      <Navbar />
      <ProductList />
      <Cart />
    </CartProvider>
  );
};

const App: React.FC = () => {
  const { token } = useAuth();

  return (
    <div className="App">
      {token ? <MainApp /> : <Login />}
    </div>
  );
};

const WrappedApp: React.FC = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default WrappedApp;
