import { TextType, ButtonType } from "components-types"
import styled from "styled-components/native"

export const Text = styled.Text<TextType>`
  font-size: ${({ fontSize }) => `${fontSize || 22}px`};
  line-height: ${({ lineHeight }) => `${lineHeight || 32}px`};
  font-family: ${({ fontFamily }) => fontFamily || 'Overpass_400Regular'};
  color: ${({ color }) => color || '#FFF'};
`

export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.75,
}))<ButtonType>`
  background-color: ${({ backgroundColor }) => backgroundColor || '#23262B'};
  border: 1px solid ${({ borderColor }) => borderColor || '#838384'};
  border-radius: ${({ borderRadius }) => `${borderRadius || 18}px`};
  height: ${({ height }) => `${height || 54}px`};
  max-width: 100%;
  width: ${({ width }) => `${width || 328}px`};
  display: flex;
  align-items: center;
  justify-content: center;
`
