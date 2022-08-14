import { styled } from "libraries";
import { variantButton } from "utils";

export const Wrapper = styled.button`
  &.primary {
    ${variantButton("tomato", "#fff")}
  }
  &.secondary {
    ${variantButton("#f8f9fa", "#212529")}
  }
  display: block;
  transition: 0.3s ease-out;
  border: none;
  padding: 16px 20px;
  cursor: pointer;
  font-weight: 800;
`;
