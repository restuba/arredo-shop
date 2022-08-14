import { Wrapper } from "./style";

const Index = ({ title, onClick, variant }) => {
  return (
    <Wrapper className={variant} onClick={onClick}>
      {title}
    </Wrapper>
  );
};

export default Index;
