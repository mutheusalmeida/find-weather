import styled from 'styled-components/native'
import { ButtonType } from 'components-types'

export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.75,
}))<ButtonType>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  height: ${({ height }) => `${height}px`};
  max-width: 100%;
  width: ${({ width }) => `${width}px`};
  display: flex;
  align-items: center;
  justify-content: center;
`
