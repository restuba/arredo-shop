import { Label, Slider } from "components";
import { React, useState } from "libraries";
import { Wrapper } from "./style";

const Index = ({ parentCallback }) => {
  const [price, setPrice] = useState({
    label: "price",
    min: 0,
    max: 10000,
    step: 1,
    value: { min: 10, max: 10000 },
  });

  const selectedPrice = (data) => {
    setPrice({
      ...price,
      value: data.value,
    });
    parentCallback(data.value);
  };

  return (
    <Wrapper>
      <Label title="Price" />
      <Slider data={price} onChange={(value) => selectedPrice(value)} />
    </Wrapper>
  );
};

export default Index;
