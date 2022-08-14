import { styled } from "libraries";

export const Wrapper = styled.main`
  z-index: ${({ active }) => (active ? `999` : `-1`)};
  position: absolute;
  transition: 0.5s ease-out;
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background: #fff;
    opacity: ${({ active }) => (active ? `1` : `0`)};
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 120px;
      margin-bottom: 1rem;
    }
  }
`;
