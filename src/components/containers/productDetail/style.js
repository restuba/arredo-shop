import { styled } from "libraries";
import { breakpoints } from "utils";

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 3.5rem;
  ${breakpoints.md} {
    padding: 50px;
  }
  ${breakpoints.xs} {
    padding: 2rem;
  }

  .detail-product{
    section {
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 1.5rem;
      ${breakpoints.xl} {
        grid-template-columns: 50% 50%;
      }
      ${breakpoints.lg} {
        grid-template-columns: 60% 40%;
      }
      .thumb-product {
        /* background: green; */
      }
      .desc-product {
        .desc-header {
          position: relative;
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            background: tomato;
            width: 30%;
            height: 3px;
          }
          .price {
            color: tomato;
            line-height: 2rem;
            padding-top: 8px;
          }
          .name {
            line-height: 2rem;
            color: #181818;
            font-weight: 500;
          }
        }
        .desc-body {
          margin-top: 2rem;
          color: #383838;
          line-height: 1.75rem;
        }
        .desc-footer {
          margin-top: 2rem;
          .quantity {
            p {
              line-height: 2rem;
              color: #383838;
            }
            .qty-btn {
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
                width: 80px;
                height: 35px;
                text-align: center;
                border: none;
                padding: 0 1rem;
              }
            }
          }
          .add-cart {
            margin: 1.5rem 0;
          }
        }
      }
    }
  }
`;

export default Wrapper;
