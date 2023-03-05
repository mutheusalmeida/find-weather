import { TextType } from 'components-types'
import styled from 'styled-components/native'

export const Text = styled.Text<TextType>`
  color: ${({ color }) => color};
  font-family: ${({ font }) => font};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
`
