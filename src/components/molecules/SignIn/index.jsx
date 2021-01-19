import Login from 'components/pages/Login';
import React, { useState } from 'react';
import { login } from 'services';
import styled from 'styled-components';
import { breakpoints, validateEmail } from 'utils';

const SignIn = ({active}) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleFormSubmit = async e => {
    e.preventDefault();
    console.log(email, password)
    if(!email || !password){
      return alert('Formulir tidak boleh kosong');
    }

    if(!validateEmail(email)){
      return alert('Email tidak valid');
    }

    try{
      await login({ email, password });
      alert('Berhasil login')
    }catch(err){
      alert('Gagal login')
      throw err;
    }
  }

  return (
    <SignInWrap className={`form-container sign-in-container ${active ? 'isActive': ''}`}>
      <form className="form" action="#" onSubmit={handleFormSubmit}>
        <h1 className="form-title">Welcome Back!</h1>
        <input type="email" placeholder="Sign in with email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button className="form-button">sign in</button>
        <a className="find-password" href="#">Forgot password?</a>
      </form>
    </SignInWrap>
  );
};

export default SignIn;

const SignInWrap = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

  &.sign-in-container{
    left: 0;
    width: 50%;
    z-index: 2;
  }
  &.isActive{
    transform: translateX(100%);
  }
  form{
    background-color: #fff;
    display: flex;
    transition: 1s ease-out;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
    .form-title{
      margin-bottom: 30px;
    }
    input{
      background-color: #eee;
      border: none;
      padding: 12px 16px;
      margin: 8px 0;
      width: 85%;
      text-align: center;
      font-size: 13px;
      &:focus{
        outline-color: tomato;
      }
    }
    .form-button{
      border: 1px solid tomato;
      background-color: tomato;
      color: #fff;
      font-size: 12px;
      font-weight: bold;
      padding: 12px 45px;
      letter-spacing: 1px;
      transition: transform 80ms ease-in;
      margin-top: 30px;
      text-transform: uppercase;
      &:active{
        transform: scale(0.95);
      }
      &:focus{
        outline: none;
      }
    }
    .find-password{
      color: gray;
      font-size: 12px;
      text-decoration: none;
      margin: 16px 0;
      letter-spacing: -0.5px;
      &:hover{
        color: tomato;
      }
    }
  }
  ${breakpoints.xs}{
    top: unset;
    left: 0;
    width: 100%;
    &.sign-in-container{
      top: 0;
      height: 50%;
      width: 100%;
    }
    &.isActive{
      transform: translateY(100%);
    }
  }
`;