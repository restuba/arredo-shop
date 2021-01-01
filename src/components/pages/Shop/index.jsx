import { React, styled } from 'libraries';
import { Product, Filter } from 'components';
import { product1, product2, product3, product4, product5, product6, product7, product8 } from 'assets';
import { breakpoints } from 'utils';
import { useState } from 'react';
import { RiFilter2Line as FilterIc } from 'react-icons/ri';

export const Shop = () => {
  const [ filterActive, setFilterActive ] = useState(false);

  return (
    <ShopWrap>
      <Filter
        isActive={filterActive}
        onClick={() => setFilterActive(false)}
      />
      <FloatingBtn onClick={() => setFilterActive(!filterActive)}>
        <FilterIc/>
      </FloatingBtn>
      <ProductsWrap>
        <Product 
          image={product1}
          price="$180"
          name="Modern Chair"
        />
        <Product 
          image={product2}
          price="$180"
          name="Modern Chair"
        />
        <Product 
          image={product3}
          price="$180"
          name="Modern Chair"
        />
        <Product 
          image={product4}
          price="$180"
          name="Modern Chair"
        />
        <Product 
          image={product5}
          price="$180"
          name="Modern Chair"
        />
        <Product 
          image={product6}
          price="$180"
          name="Modern Chair"
        />
        <Product 
          image={product7}
          price="$180"
          name="Modern Chair"
        />
        <Product 
          image={product8}
          price="$180"
          name="Modern Chair"
        />
      </ProductsWrap>
    </ShopWrap>
  );
};

const ShopWrap = styled.main`
  width: 100%;
  padding: 2rem 3.5rem;
  ${breakpoints.md}{
    padding: 50px;
  }
  ${breakpoints.xs}{
    padding: 2rem;
  }
`;

const ProductsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 2rem;
`;

const FloatingBtn = styled.button`
  background: tomato;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 4vw;
  bottom: 50px;
  z-index: 99;
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow: 0px 17px 10px -10px rgba(0,0,0,0.4);
  cursor: pointer;
  color: #fff;
  outline: none;
  font-size: 24px;
  transition: 0.3s ease-out;
  &:hover{
    background: #d62e2e;
  }
`;
