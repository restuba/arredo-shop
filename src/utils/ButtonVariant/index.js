export function variantButton(bgColor, textColor){
  return `
    background: ${bgColor};
    color: ${textColor};
    &:hover{
      filter: brightness(90%);
    }
  `;
}