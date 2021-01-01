import { React, styled } from 'libraries';

export const Dropdown = ({isOpen, data, onClick}) => {
  return (
    <DropdownWrap isOpen={isOpen}>
      {data.map(item => (
        <ListItem onClick={() => onClick(item)} key={Math.random()}>
          {item}
        </ListItem>
      ))}
    </DropdownWrap>
  );
};

const DropdownWrap = styled.ul`
  z-index: 2;
  background: #f5f7fa;
  display: ${({isOpen}) => isOpen ? `block` : `none`};
  height: ${({isOpen}) => isOpen ? `100%` : `0px`};
  opacity: ${({isOpen}) => isOpen ? `1` : `0`};
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
`;

const ListItem = styled.li`
  padding: 12px;
  list-style: none;
  &:hover{
    background: #ddd;
  }
`;