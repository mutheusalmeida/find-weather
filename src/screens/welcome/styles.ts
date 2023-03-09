import styled from 'styled-components/native'
import { Button, Text } from '../../styles'

export const WelcomeContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 33px;
  padding: 16px 16px 54px;
  background-color: ${({ theme }) => theme.colors.dark};
`

export const Image = styled.Image`
  margin-bottom: 24px;
`

export const Title = styled(Text)`
  font-size: ${({ theme }) => `${theme.fontSize.xxl33}px`};
  line-height: 42px;
  font-family: ${({ theme }) => theme.fontFamily.OverpassSemiBold};
  max-width: 304px;
  text-align: center;
`

export const Desc = styled(Title)`
  font-size: ${({ theme }) => `${theme.fontSize.md22}px`};
  font-family: ${({ theme }) => theme.fontFamily.OverpassSemiBold};
  max-width: 360px;
  line-height: 28px;
  margin-bottom: 41px;
  color: ${({ theme }) => theme.colors.gray200};
  `

export const BoldText = styled(Desc)`
  font-family: ${({ theme }) => theme.fontFamily.OverpassBold};
`

export const StartBtn = styled(Button)``

export const BtnText = styled(Text)``
