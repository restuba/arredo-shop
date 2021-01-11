import { React, useCallback, useEffect, useState, styled, useSelector, useParams } from 'libraries';
import { Button, Gallery, Loading } from 'components';
import { getDetailProduct, getProducts } from 'services';
import { breakpoints } from 'utils';

const Product = () => {
  const [ loading, setLoading ] = useState(true);
  const { name, description, images, price } = useSelector(state => state.product.detailProduct);
  const [ order, setOrder ] = useState(1);
  const { slug } = useParams();
  
  const initData = useCallback(async () => {
    try{
      setLoading(true);
      const data = await getProducts();
      getDetailProduct(data, slug);
      setLoading(false);
    }catch(err){
      setLoading(false);
      alert('Terjadi kesalahan!');
      throw err;
    }
  },[slug])

  useEffect(() => {
    initData();
  },[initData]);

  const renderList = () => {
    if(loading){
      return  <Loading color='#202020' type='spinningBubbles'/>
    }

    return (
      <div className="detail-product">
        <section>
          <div className="thumb-product">
            <Gallery images={images}/>
          </div>
          <div className="desc-product">
            <div className="desc-header">
              <h2 className="price">${price}</h2>
              <h3 className="name">{name}</h3>
            </div>
            <p className="desc-body">{description}</p>
            <div className="desc-footer">
              <div className="quantity">
                <p>Quantity</p>
                <div className="qty-btn">
                  <button className="qty-btn">-</button>
                  <input type="number" className="qty-value" />
                  <button onClick={() => setOrder(order+1)} className="qty-btn">+</button>
                </div>
              </div>
              <div className="add-cart">
                <Button title="Add to cart"/>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <>
      <ProductWrappper>
        {renderList()}
      </ProductWrappper>
    </>
  );
};

export default Product;

const ProductWrappper = styled.div`
  width: 100%;
  padding: 2rem 3.5rem;
  ${breakpoints.md}{
    padding: 50px;
  }
  ${breakpoints.xs}{
    padding: 2rem;
  }
 
  .detail-product{
    section{
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 1.5rem;
      ${breakpoints.xl}{
        grid-template-columns: 50% 50%;
      }
      ${breakpoints.lg}{
        grid-template-columns: 60% 40%;
      }
      .thumb-product{
        /* background: green; */
      }
      .desc-product{
        .desc-header{
          position: relative;
          &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            background: tomato;
            width: 30%;
            height: 3px;
          }
          .price{
            color: tomato;
            line-height: 2rem;
            padding-top: 8px;
          }
          .name{
            line-height: 2rem;
            color: #181818;
            font-weight: 500;
          }
        }
        .desc-body{
          margin-top: 2rem;
          color: #383838;
          line-height: 1.75rem;

        }
        .desc-footer{
          margin-top: 2rem;
          .quantity{
            p{
              line-height: 2rem;
              color: #383838;
            }
            .qty-btn{
              .qty-btn{
                height: 35px;
                width: 35px;
                cursor: pointer;
                background: #eee;
                transition: 0.3s ease-out;
                border: none;
                &:hover{
                  background: #ccc;
                }
              }
              .qty-value{
                width: 80px;
                height: 35px;
                text-align: center;
                border: none;
                padding: 0 1rem;
              }
            }
          }
          .add-cart{
            margin: 1.5rem 0;
          }
        }
      }
    }
  }
`;