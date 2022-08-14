import { styled } from "libraries";
import { breakpoints } from "utils";

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 3.5rem;
  ${breakpoints.md} {
    padding: 50px;
  }
  ${breakpoints.xs} {
    padding: 2rem;
  }
  .cart-content {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 1.5rem;
    align-items: baseline;
    ${breakpoints.xl} {
      grid-template-columns: 70% 30%;
    }
    .cart-table {
      width: 100%;
      overflow-x: auto;
      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        tr {
          width: 100%;
          height: 40px;
          th {
            border-bottom: 1px solid #eee;
            font-size: 14px;
            color: #242424;
            text-transform: capitalize;
            font-weight: 400;
            padding: 16px 12px;
          }
          td {
            box-sizing: border-box;
            padding: 8px 12px;
            text-align: center;
            justify-content: center;
            img {
              width: 70px;
            }
            h4 {
              font-weight: 400;
              color: #252525;
              ${breakpoints.xs} {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
    .cart-summary {
      border: 1px solid #eee;
      h4 {
        padding: 12px 16px;
        background: #eee;
      }
      .summary-table {
        margin-top: 12px;
        ul {
          li {
            padding: 12px 16px;
            list-style: none;
            display: flex;
            justify-content: space-between;
          }
        }
        .checkout {
          border-top: 1px solid #eee;
          margin-top: 1rem;
          padding: 16px;
        }
      }
    }
  }
`;

export const QuantityBtn = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  .qty-control {
    display: flex;
    .qty-btn {
      height: 35px;
      width: 35px;
      cursor: pointer;
      background: #eee;
      transition: 0.3s ease-out;
      border: none;
      &:hover {
        background: #ccc;
      }
    }
    .qty-value {
      width: 40px;
      height: 35px;
      text-align: center;
      border: none;
      padding: 0 1rem;
    }
  }
`;
