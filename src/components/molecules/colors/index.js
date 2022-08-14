import { Label } from "components";
import { React, useState } from "libraries";
import { Wrapper } from "./style";

const colors = [
  "red",
  "aliceblue",
  "aqua",
  "blue",
  "yellowgreen",
  "gray",
  "black",
  "white",
];

const Index = ({ parentCallback }) => {
  // eslint-disable-next-line no-unused-vars
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColor = (value) => {
    setSelectedColor(value);
    parentCallback(value);
  };
  return (
    <Wrapper>
      <Label title="Color" />
      <div className="component_colors_list">
        {colors.map((item) => (
          <li
            style={{ backgroundColor: `${item}` }}
            onClick={() => handleColor(item)}
            key={Math.random()}
          ></li>
        ))}
      </div>
    </Wrapper>
  );
};

export default Index;
