import styled from 'styled-components/native'
import { Text } from '../styles'

export const WeatherContainer = styled.View`
  gap: 6px;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

export const Icon = styled.Image``

export const TextWrapper = styled.View``

export const HorizontalLine = styled.View`
  height: 36px;
  width: 1px;
  right: 100%;
  top: 50%;
  transform: translateY(-18px);
  position: absolute;
  background-color: ${({ theme }) => theme.colors.gray600};
`

export const Value = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamily.OverpassBold};
  font-size: ${({ theme }) => `${theme.fontSize.xs16}px`};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`

export const Label = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamily.OverpassLight};
  font-size: ${({ theme }) => `${theme.fontSize.xxs14}px`};
  line-height: 18px;
  color: ${({ theme }) => theme.colors.gray400};
  text-align: center;
`
