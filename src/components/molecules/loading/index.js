import { React, ReactLoading } from "libraries";
import { Wrapper } from "./style";

const Index = ({ type, color }) => {
  return (
    <Wrapper>
      <ReactLoading type={type} color={color} height={"10%"} width={"10%"} />
    </Wrapper>
  );
};

export default Index;
