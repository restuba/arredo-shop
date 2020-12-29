import React from 'react';
import { logoBlack } from 'assets';
import { Link, styled } from 'libraries';
import { breakpoints } from 'utils';

export const Sidenav = ({onClick, isShow}) => {
  return (
    <SidenavWrap isShow={isShow} onClick={onClick}>
      <div className="nav-close">&#x2715;</div>
      <div className="nav-brand">
        <Link to="/">
          <img src={logoBlack} alt="logo-brand" />
        </Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/shop" className="link">Shop</Link></li>
          <li><Link to="/product" className="link">Product</Link></li>
          <li><Link to="/cart" className="link">Cart</Link></li>
          <li><Link to="/checkout" className="link">Checkout</Link></li>
        </ul>
      </nav>
    </SidenavWrap>
  );
};

const SidenavWrap = styled.header`
  transition: 0.3s ease-out;
  box-sizing: border-box; 
  position: relative;
  z-index: 1;
  flex: 0 0 320px;
  width: 320px;
  max-width: 320px;
  padding: 60px 75px;
  background-color: #fff;
  ${breakpoints.md}{
    flex: 0 0 280px;
    width: 280px;
    max-width: 280px;
    padding: 50px;
  }
  ${breakpoints.xs}{
    flex: 0 0 320px;
    width: 320px;
    max-width: 320px;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: ${({isShow}) => isShow ? `0` : `-350px`};
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    display: block;
  }
  &.header-active{
    left: 0;
  }

  .nav-close{
    transition: 0.3s ease-out;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    background: red;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    display: none;
    font-size: 20px;
    color: #fff;
    ${breakpoints.xs}{
      display: flex;
    }
  }

  .nav-brand{
    margin-bottom: 100px;
    display: block;
    img{
      width: 100%;
      height: auto;
    }
  }

  .nav-links li{
    list-style: none;
    a{
      font-size: 14px;
      text-transform: uppercase;
      position: relative;
      z-index: 1;
      padding: 20px 0;
      display: block;
      line-height: 0.9;
      color: #131212;
      font-weight: normal;
      text-decoration:  none;
    }
  }
`;