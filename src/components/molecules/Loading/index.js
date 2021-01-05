import { React, ReactLoading, styled } from 'libraries';

export const Loading = ({type, color}) => {
  return (
    <LoadingWrap>
      <ReactLoading type={type} color={color} height={'10%'} width={'10%'}/>
    </LoadingWrap>
  );
};

const LoadingWrap = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  div{
    margin: auto;
  }
`;