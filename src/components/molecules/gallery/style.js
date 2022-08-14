import { styled } from "libraries";
import { breakpoints } from "utils";

export const Wrapper = styled.div`
  width: 100%;
  .header-gallery {
    width: 100%;
    height: 480px;
    overflow: hidden;
    ${breakpoints.xs} {
      height: 320px;
    }
    &:before {
      content: "";
      display: block;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.5s ease-out;
      background-position: center center;
      background-repeat: none;
      background-size: cover;
      &:hover {
        transform: scale(1.5);
      }
    }
  }
  .thumb-gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
    align-items: stretch;
    img {
      width: 100%;
      height: 60px;
      object-fit: cover;
      border: 2px solid #ffffff;
      cursor: pointer;
      &.active {
        border: 2px solid tomato;
      }
    }
  }
`;
