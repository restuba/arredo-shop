import React from 'react';
import styled from 'styled-components';
import { breakpoints } from 'utils';
import { product1, product2, product3 } from 'assets';
import { Button } from 'components/atoms';
import { PrivateContainer } from 'components';

const Cart = () => {
  return (
    <PrivateContainer>
      <CartWrap>
        <h3>Shopping List</h3>
        <div className="cart-content">
          <div className="cart-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={product1} alt="thumb-table" />
                  </td>
                  <td>
                    <h4>White Modern Chairt</h4>
                  </td>
                  <td>
                    <h4>$130</h4>
                  </td>
                  <td>
                    <QuantityBtn className="quantity">
                      <div className="qty-control">
                        <button className="qty-btn">-</button>
                        <input type="number" className="qty-value" />
                        <button className="qty-btn">+</button>
                      </div>
                    </QuantityBtn>
                  </td>
                </tr>

                <tr>
                  <td>
                    <img src={product2} alt="thumb-table" />
                  </td>
                  <td>
                    <h4>White Modern Chairt</h4>
                  </td>
                  <td>
                    <h4>$130</h4>
                  </td>
                  <td>
                    <QuantityBtn className="quantity">
                      <div className="qty-control">
                        <button className="qty-btn">-</button>
                        <input type="number" className="qty-value" />
                        <button className="qty-btn">+</button>
                      </div>
                    </QuantityBtn>
                  </td>
                </tr>

                <tr>
                  <td>
                    <img src={product3} alt="thumb-table" />
                  </td>
                  <td>
                    <h4>White Modern Chairt</h4>
                  </td>
                  <td>
                    <h4>$130</h4>
                  </td>
                  <td>
                    <QuantityBtn className="quantity">
                      <div className="qty-control">
                        <button className="qty-btn">-</button>
                        <input type="number" className="qty-value" />
                        <button className="qty-btn">+</button>
                      </div>
                    </QuantityBtn>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cart-summary">
            <h4>Cart summary</h4>
            <div className="summary-table">
              <ul>
                <li>
                  <span>Subtotal:</span>
                  <span>$140</span>
                </li>
                <li>
                  <span>Delivery:</span>
                  <span>Free</span>
                </li>
                <li>
                  <span>Total:</span>
                  <span>$140</span>
                </li>
              </ul>
              <div className="checkout">
                <Button title="Checkout" />
              </div>
            </div>
          </div>
        </div>
      </CartWrap>
    </PrivateContainer>
  );
};

export default Cart;

const CartWrap = styled.div`
  width: 100%;
  padding: 2rem 3.5rem;
  ${breakpoints.md}{
    padding: 50px;
  }
  ${breakpoints.xs}{
    padding: 2rem;
  }
  .cart-content{
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 1.5rem;
    align-items: baseline;
    ${breakpoints.xl}{
      grid-template-columns: 70% 30%;
    }
    .cart-table{
      width: 100%;
      overflow-x: auto;
      table{
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        tr{
          width: 100%;
          height: 40px;
          th{
            border-bottom: 1px solid #eee;
            font-size: 14px;
            color: #242424;
            text-transform: capitalize;
            font-weight: 400;
            padding: 16px 12px;
          }
          td{
            box-sizing: border-box;
            padding: 8px 12px;
            text-align: center;
            justify-content: center;
            img{
              width: 70px;
            }
            h4{
              font-weight: 400;
              color: #252525;
              ${breakpoints.xs}{
                font-size: 14px;
              }
            }
          }
        }
      }
    }
    .cart-summary{
      border: 1px solid #eee;
      h4{
        padding: 12px 16px;
        background: #eee;
      }
      .summary-table{
        margin-top: 12px;
        ul{
          li{
            padding: 12px 16px;
            list-style: none;
            display: flex;
            justify-content: space-between;
          }
        }
        .checkout{
          border-top: 1px solid #eee;
          margin-top: 1rem;
          padding: 16px;
        }
      }

    }
  }
`;

const QuantityBtn = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  .qty-control{
      display: flex;
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
      width: 40px;
      height: 35px;
      text-align: center;
      border: none;
      padding: 0 1rem;
    }

  }
`;