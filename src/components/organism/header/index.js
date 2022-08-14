import React, { useState } from "react";
import { SideNav, TopNav } from "components";

const Index = () => {
  const [isShow, setIsShow] = useState(false);

  const handleToggle = (e) => {
    const target = e.target;
    if (
      target.classList.contains("link") ||
      target.classList.contains("nav-close")
    ) {
      setIsShow(false);
    }
  };

  return (
    <>
      <TopNav onClick={() => setIsShow(!isShow)} />
      <SideNav isShow={isShow} onClick={(e) => handleToggle(e)} />
    </>
  );
};

export default Index;
