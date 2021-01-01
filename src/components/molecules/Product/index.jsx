import { React, styled } from 'libraries';
import { RiHeartFill as FavFillIc, RiHeartLine as FavIc } from 'react-icons/ri';

export const Product = ({image, price, name, desc}) => {
  return (
    <ProductWrap>
      <img src={image} alt="" />
        <FavFillIc className="product-fav"/>
        <div className="product-content">
          <p>{price}</p>
          <h4>{name}</h4>
        </div>
    </ProductWrap>
  );
};

const ProductWrap = styled.div`
  z-index: 1;
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  .product-fav{
    position: absolute;
    fill: red;
    right: 1rem;
    top: 1rem;
    font-size: 24px;
    z-index: 2;
  }

  &:hover{
    .product-content{
      &::after{
        width: 100%;
        left: 0;
      }
      h4{
        color: tomato;
      }
    }
  }
  img{
    height: 380px;
    width: 100%;
    object-fit: cover;
  }
  .product-content{
    position: relative;
    padding: 1rem 0;
    &::after{
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: tomato;
      display: block;
      transition: 0.3s ease-out;
      color: 
    }
    p{
      color: rgba(128, 129, 145, 1);
    }
    h4{
      color: rgba(17, 20, 45, 1);
      line-height: 1.5rem;
    }
  }
`;