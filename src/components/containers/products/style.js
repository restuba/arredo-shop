import { styled } from "libraries";
import { breakpoints } from "utils";

export const Wrapper = styled.main`
  width: 100%;
  padding: 2rem 3.5rem;
  ${breakpoints.md} {
    padding: 50px;
  }
  ${breakpoints.xs} {
    padding: 2rem;
  }

  .component_product_list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 2rem;
  }
`;

export const FloatingBtn = styled.button`
  background: tomato;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 4vw;
  bottom: 50px;
  z-index: 99;
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  color: #fff;
  outline: none;
  font-size: 24px;
  transition: 0.3s ease-out;
  &:hover {
    background: #d62e2e;
  }
`;
