import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  background-color: ${(props) => props.backgroundColor || props.theme.colors.primary};
  margin-left: ${(props) => props.marginLeft || '0px'};
  transition: background-color 0.2s ease-in-out;
  border-radius: 10px;
  width: ${(props) => props.width || '150px'};
  height: ${(props) => props.height || '40px'};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.textColor || props.theme.colors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.288);
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || '#4d9291c5'};
  }
`

const ButtonText = styled.p`
  font-size: 16px;
  width: ${(props) => props.textWidth || '100px'};
  font-weight: bold;
  color: inherit; /* Herda a cor do texto do pai (StyledButton) */
`

export default function Button({
  children,
  backgroundColor,
  hoverBackgroundColor,
  marginLeft,
  onClick,
  width,
  height,
  textWidth,
  textColor,
  type
}) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      marginLeft={marginLeft}
      onClick={onClick}
      width={width}
      height={height}
      textColor={textColor}
      type={type}
    >
      <ButtonText textWidth={textWidth}>{children}</ButtonText>
    </StyledButton>
  )
}
