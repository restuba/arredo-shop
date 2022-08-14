import { React } from "libraries";
import { Wrapper } from "./style";

const Index = ({ isOpen, data, onClick }) => {
  return (
    <Wrapper isOpen={isOpen}>
      {data.map((item, index) => (
        <li
          key={`item-${index + 1}`}
          onClick={() => onClick(item)}
        >
          {item}
        </li>
      ))}
    </Wrapper>
  );
};

export default Index;
