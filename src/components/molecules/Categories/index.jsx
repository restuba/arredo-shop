import { Dropdown, Label } from 'components';
import { React, useState, styled } from 'libraries';
import { RiArrowDropDownLine as ArrowDown, RiArrowDropUpLine as ArrowUp } from 'react-icons/ri';

const option = ['product satu 1', 'product 2', 'product 3', 'product 4', 'product 5'];

export const Categories = ({ parentCallback }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ selectedCategory, setSelectedCategory ] = useState(null);

  const handleCategory = value => {
    setSelectedCategory(value);
    setIsOpen(false);
    parentCallback(value)
  }

  return (
    <CategoriesWrap>
      <Label title="Category"/>
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
    </CategoriesWrap>
  );
};

const CategoriesWrap = styled.div`
  display: block;
  margin-bottom: 1.75rem;
  transition: 1s ease-out;
  .dropdown{
    cursor: pointer;
      font-size: 14px;
      display: block; 
    .dropdown-header{
      background: #f5f7fa;
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg{
        font-size: 20px;
      }
    }
  }
`;