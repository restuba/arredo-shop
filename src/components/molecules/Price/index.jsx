import { Label, Slider } from 'components';
import { React, styled, useState } from 'libraries';

export const Price = ({parentCallback}) => {
  const [ price, setPrice ] = useState({
    label: 'price',
    min: 0,
    max: 10000,
    step: 1,
    value: {min: 10, max: 10000}
  })

  const selectedPrice = data => {
    setPrice({
      ...price,
      value: data.value
    })
    parentCallback(data.value)
  }

  return (
    <PriceWrap>
      <Label title="Price"/>
      <Slider
        data={price}
        onChange={(value) => selectedPrice(value)}
      />
    </PriceWrap>
  );
};

const PriceWrap = styled.div`
  display: block;
  margin-bottom: 3.75rem;
  transition: 1s ease-out;
`;