import { React, styled } from 'libraries';
import { Product } from 'components';
import { product1, product2, product3, product4, product5, product6, product7, product8 } from 'assets';
import { breakpoints } from 'utils';

export const Shop = () => {
  return (
    <ShopWrap>
      <Filters>
        Filters
      </Filters>
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

const Filters = styled.div`
  background: turquoise;  
  margin-bottom: 2rem;
`;

const ProductsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 2rem;
`;
