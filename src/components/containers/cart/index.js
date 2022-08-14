import { React } from "libraries";
import { product1, product2, product3 } from "assets";
import { Button } from "components";
import { QuantityBtn, Wrapper } from "./style";

const Cart = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Cart;
