import { styled } from "libraries";
import { breakpoints } from "utils";

export const Wrapper = styled.header`
  transition: 0.3s ease-out;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  flex: 0 0 320px;
  width: 320px;
  max-width: 320px;
  padding: 2rem 4.75rem;
  background-color: #fff;
  border-right: 1px solid #eee;
  ${breakpoints.md} {
    flex: 0 0 280px;
    width: 280px;
    max-width: 280px;
    padding: 50px;
  }
  ${breakpoints.xs} {
    flex: 0 0 320px;
    width: 320px;
    max-width: 320px;
    position: fixed;
    z-index: 100;
    top: 0;
    left: ${({ isShow }) => (isShow ? `0` : `-350px`)};
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    display: block;
  }
  &.header-active {
    left: 0;
  }

  .nav-close {
    transition: 0.3s ease-out;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    background: tomato;
    text-align: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    display: none;
    font-size: 20px;
    color: #fff;
    ${breakpoints.xs} {
      display: flex;
    }
  }

  .nav-brand {
    margin-bottom: 60px;
    display: block;
    img {
      width: 100%;
      height: auto;
    }
  }

  .nav-links {
    ul {
      margin-bottom: 1.5rem;
      li {
        cursor: pointer;
        list-style: none;
        position: relative;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: normal;
        text-transform: uppercase;
        text-decoration: none;
        color: #424242;
        z-index: 1;
        padding: 20px 0;
        transition: 0.3s ease-out;
        span {
          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        &::after {
          content: "";
          transition: 0.3s ease-out;
          width: 70px;
          height: 3px;
          position: absolute;
          background: transparent;
          left: -150px;
        }
        svg {
          margin-right: 16px;
          font-size: 20px;
        }
        img {
          box-sizing: border-box;
          width: 20px;
          height: 20px;
          margin-right: 16px;
          border-radius: 50%;
          border: 1px solid tomato;
        }
        &:hover,
        &.active {
          &::after {
            background: tomato;
            left: -95px;
          }
        }
      }
    }
  }
`;
