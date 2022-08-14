import { React, Link } from "libraries";
import { logoBlack } from "assets";
import { RiMenu3Line as MenuIc } from "react-icons/ri";
import { Wrapper } from "./style";

const Index = ({ onClick }) => {
  return (
    <Wrapper>
      <div className="nav-brand">
        <Link to="/">
          <img src={logoBlack} alt="logo-brand" />
        </Link>
      </div>
      <div className="nav-toggle" onClick={() => onClick()}>
        <MenuIc />
      </div>
    </Wrapper>
  );
};

export default Index;
