import { React, styled} from 'libraries';

export const Label = ({title}) => {
  return (
    <LabelWrap>{title}</LabelWrap>
  );
};

const LabelWrap = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  color: rgba(128, 129, 145, 1);
`;