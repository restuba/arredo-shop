import React from 'react';
import styled from 'styled-components';
import { breakpoints } from 'utils';

const Sign = ({ handleClickSignIn, handleClickSignUp, active }) => {
  return (
    <SignWrap className={`overlay-container ${active ? 'isActive': ''}`}>
      <div className={`overlay`}>
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p className="overlay-description">
            To keep connected with us please<br/>
            sign in with your account
          </p>
          <button
            className="ghost form-button"
            id="signIn"
            onClick={handleClickSignIn}
          >
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p className="overlay-description">
            If you are not yet a member,<br/>
            After signing up, you can use more services.
          </p>
          <button
            className="ghost form-button"
            id="signUp"
            onClick={handleClickSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </SignWrap>
  );
};

export default Sign;

const SignWrap = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 2;
  background: red;
  .overlay{
    background: tomato;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transition: transform 0.6s ease-in-out;
    .overlay-panel{
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 0 40px;
      text-align: center;
      top: 0;
      height: 100%;
      width: 50%;
      /* transform: translateX(0); */
      transition: transform 0.6s ease-in-out;
      &.overlay-left{
        transform: translateX(-20%);
        padding: 0;
      }
      &.overlay-right{
        transform: translateX(0);
        padding: 0;
        right: 0;
      }
      h1{
        font-weight: bold;
        margin: 0;
      }
      .overlay-description {
          font-size: 15px;
          font-weight: 300;
          line-height: 20px;
          letter-spacing: -0.4px;
          margin: 40px;
      }
      .form-button{
        border: 1px solid #fff;
        background-color: transparent;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        transition: transform 80ms ease-in;
        margin-top: 30px;
        &:active{
          transform: scale(0.95);
        }
        &:focus{
          outline: none;
        }
      }
    }

  }
  &.isActive{
    transform: translateX(-100%);

    .overlay{
      transform: translateX(50%);
      .overlay-panel{
        &.overlay-left{
          transform: translateX(0);
        }
      }
      .overlay-panel{
        &.overlay-right{
          transform: translateX(20%);
        }
      }
    }
    ${breakpoints.xs}{
      transform: translateY(-100%);
      .overlay{
        transform: translateY(50%);
        .overlay-panel{
          &.overlay-left{
            transform: translateY(0);
          }
          &.overlay-right{
            transform: translateY(20%);
          }
        }
      }
    }
  }

  ${breakpoints.xs}{
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    .overlay{
      top: -100%;
      left: unset;
      width: 100%;
      height: 200%;
      .overlay-panel{
        top: auto;
        left: 0;
        width: 100%;
        height: 50%;
        transform: translateY(0);
        transform: translateX(0);
        
        &.overlay-left{
          transform: translateY(-20%);
          transform: translateX(0);
        }
        &.overlay-right{
          transform: translateY(0);
          transform: translateX(0);
          top: unset;
          right: 0;
          left: 0;
          bottom: 0!important;
        }
      }
    }
    &.isActive{
      transform: translateX(0);
      transform: translateY(-100%);
      .overlay{
        transform: translateY(50%);
        /* transform: translateX(0); */
        .overlay-panel{
          &.overlay-left{
            transform: translateY(0);
            transform: translateX(0);
          }
        }
        .overlay-panel{
          &.overlay-right{
            transform: translateY(20%);
            transform: translateX(0);
          }
        }
      }
    }
  }
`;