import { Categories, Colors, Price, Button } from 'components';
import { React, styled, useState } from 'libraries';

export const Filter = ({isActive, onClick}) => {
  const [ selectedCategory, setSelectCategory ] = useState(false);
  const [ selectedColor, setSelectedColor ] = useState(false);
  const [ selectedPrice, setSelectedPrice ] = useState(false);
  return (
    <FilterWrap isActive={isActive}>
      <button className="nav-close" onClick={() => onClick()}>&#x2715;</button>
      <div className="title">
        <h2>Filter</h2>
      </div>
      <Categories parentCallback={setSelectCategory}/>
      <Colors parentCallback={setSelectedColor}/>
      <Price parentCallback={setSelectedPrice}/>
      <Button title="Filter"/>
    </FilterWrap>
  );
};

const FilterWrap = styled.div`
  flex: 0 0 320px;
  width: 320px;
  max-width: 320px;
  position: fixed;
  z-index: 2000;  
  top: 0;
  left: ${({isActive}) => isActive ? `0` : `-350px`};
  height: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 2rem 3.25rem;
  border-right: 1px solid #eee;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: 0.3s ease-out;
  .nav-close{
    display: flex;
    transition: 0.3s ease-out;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    background: tomato;
    text-align: center;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: #fff;
    &:hover{
      background: #d62e2e;
    }
  }
  .title{
    margin-bottom: 60px;
  }
`;