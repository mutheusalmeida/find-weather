import styled from 'styled-components/native'
import { Text } from '../styles'

export const WeatherContainer = styled.View`
  gap: 8px;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.dark300};
  border: 1.5px solid ${({ theme }) => theme.colors.dark100};
  border-radius: 20px;
  padding: 6px 16px;
  height: 90px;
`

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
`

export const Value = styled.View`
  height: 18px;
  flex-direction: row;
  align-items: flex-start;
  gap: 1px;
`

export const Num = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamily.OverpassBold};
  font-size: ${({ theme }) => `${theme.fontSize.sm18}px`};
  line-height: 23px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`

export const Ceusius = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamily.OverpassRegular};
  font-size: ${({ theme }) => `${theme.fontSize.xxxs12}px`};
  line-height: 15px;
  color: ${({ theme }) => theme.colors.gray100};
`

export const Hour = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamily.OverpassBold};
  font-size: ${({ theme }) => `${theme.fontSize.xxxs12}px`};
  line-height: 15px;
  height: 100%;
  color: ${({ theme }) => theme.colors.gray100};
  text-align: center;
`
