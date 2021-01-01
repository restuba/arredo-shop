import { Label } from 'components';
import { React, styled, useState } from 'libraries';

const colors = ['red', 'aliceblue', 'aqua', 'blue', 'yellowgreen', 'gray', 'black', 'white'];

export const Colors = ({parentCallback}) => {
  const [ selectedColor, setSelectedColor ] = useState(null);

  const handleColor = value => {
    setSelectedColor(value);
    parentCallback(value);
  }
  return (
    <ColorsWrap>
      <Label title="Color"/>
      <ColorsList>
        {colors.map(item => (
          <li style={{backgroundColor: `${item}`}} onClick={() => handleColor(item)} key={Math.random()}>
          </li>
        ))}
      </ColorsList>
    </ColorsWrap>
  );
};

const ColorsWrap = styled.div`
  display: block;
  margin-bottom: 1.75rem;
  transition: 1s ease-out;
`;

const ColorsList = styled.div`
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  transition: all .3s ease-out;
  animation: growDown 0.3s ease-in-out forwards;
  transform-origin: top center;
  @keyframes growDown{
    0%{
        transform: scaleY(0)
    }
    80%{
        transform: scaleY(1.1)
    }
    100%{
        transform: scaleY(1)
    }
  }
  li{
    position: relative;
    box-sizing: border-box;
    padding: 14px;
    border-radius: 50%;
    list-style: none;
    border: 2px solid ${({selected}) => selected ? 'tomato' : 'transparent'};
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    &:after{
      content: '';
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
    &:hover{
      background: #ddd;
      border: 2px solid tomato; 
      &:after{
        height: 14px;
        width: 14px;
      }
    }
  }
`;