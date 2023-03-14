import { TextType, ButtonType } from "components-types"
import styled from "styled-components/native"

export const Text = styled.Text<TextType>`
  font-size: ${({ fontSize, theme }) => `${fontSize || theme.fontSize.md22}px`};
  line-height: ${({ lineHeight }) => `${lineHeight || 32}px`};
  font-family: ${({ fontFamily, theme }) => fontFamily || theme.fontFamily.OverpassRegular};
  color: ${({ color, theme }) => color || theme.colors.white};
`

export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.75,
}))<ButtonType>`
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.dark300};
  border: 1px solid ${({ borderColor, theme }) => borderColor || theme.colors.gray300};
  border-radius: ${({ borderRadius }) => `${borderRadius || 18}px`};
  height: ${({ height }) => `${height || 54}px`};
  max-width: 100%;
  width: ${({ width }) => `${width || 328}px`};
  align-items: center;
  justify-content: center;
`

export const TabButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.75,
}))``
