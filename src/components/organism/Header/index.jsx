import React from 'react';
import { Link } from 'libraries';

export const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/product">Product</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
};