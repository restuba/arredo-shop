import { styled } from "libraries";

export const Wrapper = styled.div`
  display: block;
  margin-bottom: 1.75rem;
  transition: 1s ease-out;
  .dropdown {
    cursor: pointer;
    font-size: 14px;
    display: block;
    .dropdown-header {
      background: #f5f7fa;
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg {
        font-size: 20px;
      }
    }
  }
`;
