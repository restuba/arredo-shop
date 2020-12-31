import { logoBlack } from 'assets';
import { React, Link, NavLink, styled } from 'libraries';
import { breakpoints } from 'utils';
import {RiAppsLine as HomeIc, RiShoppingCartLine as CartIc, RiStore2Line as ShopIc, RiHeartLine as FavIc, RiAccountCircleLine as ProfileIc, RiSearchLine as SearchIc, RiBuilding2Line as AboutIc} from 'react-icons/ri';

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
          <li>
            <NavLink exact to="/" activeClassName="active" className="link"><HomeIc/>Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/shop" activeClassName="active" className="link"><ShopIc/>Shop</NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeClassName="active" className="link"><AboutIc/>About</NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="#" className="link"><SearchIc/>Search</Link>
          </li>
          <li>
            <NavLink exact to="/cart" activeClassName="active" className="link"><CartIc/>Cart (0)</NavLink>
          </li>
          <li>
            <NavLink exact to="/favorite" activeClassName="active" className="link"><FavIc/>Favorite (0)</NavLink>
          </li>
          <li>
            <NavLink exact to="/profile" activeClassName="active" className="link"><ProfileIc/>Profile</NavLink>
          </li>
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
  padding: 2rem 4.75rem;
  background-color: #fff;
  border-right: 1px solid #eee;
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
    background: tomato;
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
    margin-bottom: 60px;
    display: block;
    img{
      width: 100%;
      height: auto;
    }
  }

  .nav-links {
    ul{
      margin-bottom: 2rem;
      li{
        list-style: none;
        a{
          position: relative;
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: normal;
          text-transform: uppercase;
          text-decoration:  none;
          color: #424242;
          z-index: 1;
          padding: 20px 0;
          transition: 0.3s ease-out;
          &::after{
            content: '';
            transition: 0.3s ease-out;
            width: 70px;
            height: 3px;
            position: absolute;
            background: transparent;
            left: -150px;
          }
          svg{
            margin-right: 16px;
            font-size: 20px;
          }
          &:hover, &.active{
            &::after{
              background: tomato;
              left: -95px;
            }
          }
        }
      }
    }
  }
`;