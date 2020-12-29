import React, { useState } from 'react';
import { Sidenav, Topnav } from 'components/molecules';

export const Header = () => {
  const [ isShow, setIsShow ] = useState(false);

  const handleToggle = e => {
    const target = e.target;
    if(target.classList.contains('link') || target.classList.contains('nav-close')){
      setIsShow(false)
    }
  } 

  return (
    <>
      <Topnav onClick={() => setIsShow(!isShow)}/>
      <Sidenav isShow={isShow} onClick={e => handleToggle(e)}/>
    </>
  );
};