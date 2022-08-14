/* eslint-disable no-unused-vars */
import { React } from "libraries";
import { Wrapper } from "./style";
// import 'react-input-range/lib/css/index.css';

const Index = (props) => {
  const { min, max, step, value } = props.data;
  const onChange = (range) => {
    props.onChange({
      type: props.data.label,
      value: range,
    });
  };

  return (
    <Wrapper>
      {/* <InputRange 
        minValue={min}
        maxValue={max}
        step={step}
        onChange={onChange}
        value={value}
      /> */}
    </Wrapper>
  );
};

export default Index;
