import React, { useState } from 'react';
import { register } from 'services';
import styled from 'styled-components';
import { breakpoints, handleAsync, validateEmail } from 'utils';

const SignUp = ({active}) => {
  const [ fullname, setFullname ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPass, setConfirmPass ] = useState('');

  const handleFormSubmit = async e => {
    e.preventDefault();
    if(!fullname || !email || !password || !confirmPass){
      return alert('Formulir tidak lengkap')
    }

    if(!validateEmail(email)){
      return alert('Email tidak valid');
    }

    if(password !== confirmPass){
      return alert('Kata sandi tidak cocok!')
    }

    const payload = {
      name: fullname,
      email,
      password
    }

    const [ res, err ] = await handleAsync(register(payload));
    console.log('res', res)
    return res;
  }

  return (
    <SignUpWrap className={`form-container sign-up-container ${active ? 'isActive': ''}`}>
      <form className="form" action="#" onSubmit={handleFormSubmit}>
        <h1 className="form-title">Hello, Friend!</h1>
        <input type="text" placeholder="Fullname" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="password" placeholder="Confirm Password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}/>
        <button className="form-button">sign up</button>
      </form>
    </SignUpWrap>
  );
};

export default SignUp;

const SignUpWrap = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

  &.sign-up-container{
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }
  &.isActive{
    transform: translateX(100%);
    opacity: 1;
    z-index: 3;
    animation: show 0.6s;
  }
  form{
    background-color: #fff;
    display: flex;
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
  @keyframes show {
    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}
  ${breakpoints.xs}{
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    &.sign-up-container{
      top: 0;
      height: 50%;
      width: 100%;  
    }
    &.isActive{
      transform: translateY(100%);
      animation: show 0.6s;
      /* transform: translateX(0); */
    }
    .form{
      padding: 50px;
    }
  }
`;