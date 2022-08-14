import { styled } from "libraries";

export const Wrapper = styled.div`
  display: block;
  margin-top: 32px;
  padding: 0 8px;
  .input-range__slider {
    background: tomato;
    border: none;
    transition: 0.3s ease-out;
    &:hover {
      background: #d62e2e;
    }
  }

  .input-range__track {
    background: #ddd;
  }

  .input-range__track--active {
    background: tomato;
  }

  .input-range__label--value .input-range__label-container {
    background: #f5f7fa;
    color: #111111;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 2px;
  }

  .input-range__label--min .input-range__label-container,
  .input-range__label--max .input-range__label-container {
    font-size: 12px;
    color: #888;
    left: 0;
  }

  .input-range__label--max .input-range__label-container {
    left: 25%;
  }
`;
