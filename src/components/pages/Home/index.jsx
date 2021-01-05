import { Loading } from 'components';
import {  React, styled,ResponsiveMasonry, Masonry, useSelector } from 'libraries';
import { useCallback, useEffect, useState } from 'react';
import { getFeatured, getProducts } from 'services';

export default function Home(){  
  const [ laoding, setLoading ] = useState(true);
  const { featuredProducts } = useSelector(state => state.product)
  console.log(featuredProducts)
  const initData = useCallback(async () => {
    try{
      setLoading(true);
      const data = await getProducts();
      getFeatured(data);
      setLoading(false);
    }catch(err){
      setLoading(false);
      alert('Terjadi kesalahan!');
      throw err;
    }
  },[])
  useEffect(() => {
    initData();
  },[initData]);

  const renderList = () => {
    if(laoding){
      return  <Loading color='#202020' type='spinningBubbles'/>
    }
    
    return (
      <ResponsiveMasonry
        columnsCountBreakPoints={{320: 1, 576: 2, 768: 3, 992: 3}}
      >
        <Masonry>
          {featuredProducts.map(product => (
            <div className="product" key={product.slug}>
              <img src={product.images[0]} alt="" />
              <div className="product-content">
                <p>${product.price}</p>
                <h4>{product.name}</h4>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    )
  }
  return (
    <ProductsCategories>
      {renderList()}
    </ProductsCategories>
  );
};

const ProductsCategories = styled.main`
  width: 100%;
  .product{
    z-index: 1;
    position: relative;
    top: 0;
    display: flex;
    &::after{
      transition: 0.4s ease-out;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      content: '';
      background-color: rgba(60, 60, 60, 0.7);
      z-index: 1;
      opacity: 0;
      visibility: visible;
    }
    &:hover{
     &::after{
       opacity: 1;
       visibility: visible;
     }
     .product-content{
       z-index: 2;
       &::after{
         width: 100%;
       }
       p, h4{
         color: #fff;
       }
     }
    }
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    .product-content{
      position: absolute;
      top: 2em;
      left: 2em;
      display: block;
      &::after{
        content: '';
        width: 30%;
        height: 3px;
        background-color: tomato;
        display: block;
        margin-top: 0.5rem;
        transition: 0.3s ease-out;
      }
      p{
        color: rgba(128, 129, 145, 1);
      }
      h4{
        color: rgba(17, 20, 45, 1);
        line-height: 1.5rem;
      }
    }
  }
`;