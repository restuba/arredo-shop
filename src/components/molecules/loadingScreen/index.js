import { logoBlack } from "assets";
import { React, ReactLoading } from "libraries";
import { Wrapper } from "./style";

const Index = ({ isActive }) => {
  return (
    <Wrapper active={isActive}>
      <div className="loading">
        <img src={logoBlack} alt="" />
        <ReactLoading color="#202020" type="bubbles" />
      </div>
    </Wrapper>
  );
};

export default Index;
