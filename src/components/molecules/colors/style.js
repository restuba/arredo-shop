import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  margin-bottom: 1.75rem;
  transition: 1s ease-out;

  .component_colors_list {
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    transition: all 0.3s ease-out;
    animation: growDown 0.3s ease-in-out forwards;
    transform-origin: top center;
    @keyframes growDown {
      0% {
        transform: scaleY(0);
      }
      80% {
        transform: scaleY(1.1);
      }
      100% {
        transform: scaleY(1);
      }
    }
    li {
      position: relative;
      box-sizing: border-box;
      padding: 14px;
      border-radius: 50%;
      list-style: none;
      border: 2px solid
        ${({ selected }) => (selected ? "tomato" : "transparent")};
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 0;
        width: 0;
        background: tomato;
        border-radius: 50%;
        transition: 0.3s ease-in-out;
      }
      &:hover {
        background: #ddd;
        border: 2px solid tomato;
        &:after {
          height: 14px;
          width: 14px;
        }
      }
    }
  }
`;
