import { styled } from "libraries";
import { breakpoints } from "utils";

export const Wrapper = styled.div`
  z-index: ${({ active }) => (active ? `999` : `-1`)};
  position: absolute;
  transition: 0.5s ease;
  .modal {
    transition: 0.5s ease;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: ${({ active }) => (active ? `9` : `-1`)};
    background-color: #263238;
    opacity: ${({ active }) => (active ? `0.8` : `0`)};
  }
  .box {
    box-sizing: border-box;
    transition: 0.3s ease;
    position: fixed;
    top: ${({ active }) => (active ? `100px` : `-100%`)};
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    border-radius: 0.25rem;
    background: #fff;
    min-width: 480px;
    ${breakpoints.xs} {
      min-width: 90%;
    }
    .box-content {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .alert-type {
        background: #fff;
        width: 80px;
        height: 80px;
        position: absolute;
        top: -50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 3px solid tomato;
        svg {
          font-size: 32px;
          width: 60px;
          color: #434f55;
        }
      }
      .title {
        color: #434f55;
        font-weight: 400;
        line-height: 2.5rem;
        margin: 0 2rem;
        margin-top: 60px;
      }
      .desc {
        font-size: 14px;
        opacity: 0.8;
        margin: 1rem 4rem 0;
        line-height: 1.5rem;
        color: #263238;
        text-align: center;
        ${breakpoints.xs} {
          margin: 1rem 2rem 0;
        }
      }
      .popup-action {
        background: red;
        width: 100%;
        display: flex;
        margin-top: 4rem;
        flex-grow: initial;
        button {
          width: 100%;
          border: 1px solid #fff;
        }
      }
    }
  }
`;
