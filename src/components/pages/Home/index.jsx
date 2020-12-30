import {  React, styled,ResponsiveMasonry, Masonry } from 'libraries';
import { product1, product2, product3, product4, product5, product6, product7, product8 } from 'assets';

export const Home = () => {
  return (
    <ProductsCategories>
      <ResponsiveMasonry
        columnsCountBreakPoints={{320: 1, 576: 2, 768: 3, 992: 3}}
      >
        <Masonry>
          <div className="product">
              <img src={product1} alt="" />
              <div className="product-content">
                <p>From $180</p>
                <h4>Modern Chair</h4>
              </div>
          </div>

          <div className="product">
              <img src={product2} alt="" />
              <div className="product-content">
                <p>From $180</p>
                <h4>Modern Chair</h4>
              </div>
          </div>

          <div className="product">
              <img src={product3} alt="" />
              <div className="product-content">
                <p>From $180</p>
                <h4>Modern Chair</h4>
              </div>
          </div>

          <div className="product">
              <img src={product4} alt="" />
              <div className="product-content">
                <p>From $180</p>
                <h4>Modern Chair</h4>
              </div>
          </div>

          <div className="product">
              <img src={product5} alt="" />
              <div className="product-content">
                <p>From $180</p>
                <h4>Modern Chair</h4>
              </div>
          </div>

          <div className="product">
              <img src={product6} alt="" />
              <div className="product-content">
                <p>From $180</p>
                <h4>Modern Chair</h4>
              </div>
          </div>

          <div className="product">
              <img src={product7} alt="" />
              <div className="product-content">
                <p>From $180</p>
                <h4>Modern Chair s</h4>
              </div>
          </div>

          <div className="product">
              <img src={product8} alt="" />
              <div className="product-content">
                <p>From $180</p>
                <h4>Modern Chair s</h4>
              </div>
          </div>
        </Masonry>

      </ResponsiveMasonry>
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