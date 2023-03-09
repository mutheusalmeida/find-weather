import styled from 'styled-components/native'
import { Button, Text } from '../styles'

export const BtnContainer = styled(Button)`
  gap: 6px;
  background-color: transparent;
  border: none;
  flex-direction: row;
`

export const BtnText = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamily.OverpassSemiBold};
  font-size: ${({ theme }) => `${theme.fontSize.xs16}px`};
  line-height: 30px;
  color: ${({ theme }) => theme.colors.white};
`
