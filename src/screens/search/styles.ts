import styled from 'styled-components/native'
import { Button, Text } from '../../styles'

export const SearchContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 48px 16px;
  background-color: ${({ theme }) => theme.colors.dark};
`

export const TextInputContainer = styled.SafeAreaView`
  flex-direction: row;
  gap: 16px;
`

export const TextInputWrapper = styled.View``

export const InputButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.dark400};
  width: 49px;
  height: 49px;
  border-radius: 11px;
  border: none;
`

export const TextInput = styled.TextInput`
  height: 49px;
  background-color: ${({ theme }) => theme.colors.dark400};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 16px 0 46px;
  border-radius: 11px;
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
