import { connect, React, styled } from 'libraries';
import { Product, Filter } from 'components';
import { breakpoints } from 'utils';
import { useCallback, useEffect, useState } from 'react';
import { RiFilter2Line as FilterIc } from 'react-icons/ri';
import { getProducts } from 'services';
import { productsSelector } from 'modules';

const Shop = ({products}) => {
  const [ filterActive, setFilterActive ] = useState(false);
  const [ loading, setLoading ] = useState(true);

  const initData = useCallback(async () => {
    try{
      setLoading(true);
      await getProducts();
      setLoading(false);
    }catch(err){
      setLoading(false);
      alert('Terjadi kesalahan!');
      throw err;
    }
  },[])

  useEffect(() => {
    initData();
  }, [initData]);

  const renderList = () => {
    if(loading){
      return (
        <div style={{fontSize: '42px'}}>Loading</div>
      )
    }
    return(
      <ProductsWrap>
        {console.log(products)}
        {products.map(product => (
          <Product 
            key={product.slug}
            image={product.images[0]}
            price={product.price}
            name={product.name}
          />
        ))}
      </ProductsWrap>
    )
  }


  return (
    <ShopWrap>
      <Filter
        isActive={filterActive}
        onClick={() => setFilterActive(false)}
      />
      <FloatingBtn onClick={() => setFilterActive(!filterActive)}>
        <FilterIc/>
      </FloatingBtn>
      {renderList()}
    </ShopWrap>
  );
};

const reduxState = state => ({
  products: productsSelector(state)
})

export default connect(reduxState)(Shop);

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
