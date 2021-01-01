import { styled } from 'libraries';

export const Button = ({ title, onClick }) => (
  <ButtonWrap onClick={onClick}>{title}</ButtonWrap>
);

const ButtonWrap = styled.button`
  display: block;
  background: tomato;
  transition: 0.3s ease-out;
  border: none;
  color: #fff;
  padding: 12px 20px;
  cursor: pointer;
  &:hover{
    background: #d62e2e;
  }
`;