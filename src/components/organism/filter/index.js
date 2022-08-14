/* eslint-disable no-unused-vars */
import { Categories, Colors, Price, Button } from "components";
import { React, useState } from "libraries";
import { Wrapper } from "./style";

export const Index = ({ isActive, onClick }) => {
  const [selectedCategory, setSelectCategory] = useState(false);
  const [selectedColor, setSelectedColor] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(false);
  return (
    <Wrapper isActive={isActive}>
      <button className="nav-close" onClick={() => onClick()}>
        &#x2715;
      </button>
      <div className="title">
        <h2>Filter</h2>
      </div>
      <Categories parentCallback={setSelectCategory} />
      <Colors parentCallback={setSelectedColor} />
      <Price parentCallback={setSelectedPrice} />
      <Button variant="primary" title="Filter" />
    </Wrapper>
  );
};

export default Index;
