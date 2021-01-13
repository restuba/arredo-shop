import { React, Link, styled } from 'libraries';
import { logoBlack } from 'assets';
import { breakpoints } from 'utils';
import { RiMenu3Line as MenuIc } from 'react-icons/ri';

export const Topnav = ({onClick}) => {
  return (
    <TopnavWrap>
      <div className="nav-brand">
        <Link to="/">
          <img src={logoBlack} alt="logo-brand" />
        </Link>
      </div>
      <div className="nav-toggle" onClick={() => onClick()}>
        <MenuIc/>
      </div>
    </TopnavWrap>
  );
};

const TopnavWrap = styled.header`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 70px;
  background: #fff;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5em 2em;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.15);
  display: none;
  ${breakpoints.xs}{
    display: flex;
  }
  .nav-brand{
    flex: 0 0 80px;
    max-width: 80px;
    a{
      display: block;
      max-width: 80px;
      img{
        width: 100%;
      }
    }
  }
  .nav-toggle{
    cursor: pointer;
    svg{
      font-size: 20px;
    }
  }
`;