import {React, InputRange, styled} from 'libraries';
import 'react-input-range/lib/css/index.css';

export const Slider = (props) => {
  const {min, max, step, value} = props.data;
  const onChange = range => {
    props.onChange({
      type: props.data.label,
      value: range
    })
  }
  
  return (
    <SliderWrap>
      <InputRange 
        minValue={min}
        maxValue={max}
        step={step}
        onChange={onChange}
        value={value}
      />
    </SliderWrap>
  );
};

const SliderWrap = styled.div`
  display: block;
  margin-top: 32px;
  padding: 0 8px;
  .input-range__slider {
    background: tomato;
    border: none;
    transition: 0.3s ease-out;
    &:hover{
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
  .input-range__label--max .input-range__label-container
  {
    font-size: 12px;
    color: #888;
    left: 0;
  }

  .input-range__label--max .input-range__label-container {
    left: 25%;
  }
`;