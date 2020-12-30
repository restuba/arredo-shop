import { styled } from 'libraries';
import { breakpoints } from 'utils';

export const BaseTemplate = ({ children }) => {
  return(
    <BaseTemplateWrap>
      {children}
    </BaseTemplateWrap>
  );
}

const BaseTemplateWrap = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  transition: 0.3s ease-out;
  background-color: #fff;
  min-height: 100vh;
  ${breakpoints.xs}{
    margin-top: 70px;
    z-index: 100;
  }
  /* ${breakpoints.sm}{
    background-color: blue;
  }
  ${breakpoints.md}{
    background-color: green;
  }
  ${breakpoints.lg}{
    background-color: yellow;
  }
  ${breakpoints.xl}{
    background-color: red;
  } */
`;