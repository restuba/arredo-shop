import { Dropdown, Label } from "components";
import { React, useState } from "libraries";
import {
  RiArrowDropDownLine as ArrowDown,
  RiArrowDropUpLine as ArrowUp,
} from "react-icons/ri";
import { Wrapper } from "./style";

const option = [
  "product 1",
  "product 2",
  "product 3",
  "product 4",
  "product 5",
];

const Index = ({ parentCallback }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategory = (value) => {
    setSelectedCategory(value);
    setIsOpen(false);
    parentCallback(value);
  };

  return (
    <Wrapper>
      <Label title="Category" />
      <div className="dropdown">
        <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
          {selectedCategory || option[0]}
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </div>
        <Dropdown
          isOpen={isOpen}
          data={option}
          onClick={(value) => handleCategory(value)}
        />
      </div>
    </Wrapper>
  );
};

export default Index;
