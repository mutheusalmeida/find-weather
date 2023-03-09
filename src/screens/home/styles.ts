import styled from 'styled-components/native'
import { Text } from '../../styles'
import { TouchableOpacityProps } from 'react-native'

type EmptyType = {
  isEmpty: boolean
}

export const HomeContainer = styled.View<EmptyType>`
  flex: 1;
  padding: ${({ isEmpty }) => isEmpty ? '50px 24px 28px' : '25px 16px 28px'};
  background-color: ${({ theme }) => theme.colors.dark};
`

export const HomeWrapper = styled.View<EmptyType>`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 33px;
  padding: 0 0 ${({ isEmpty }) => isEmpty ? `${72}px` : `${41}px`};
`

export const Image = styled.Image`
  margin-bottom: 24px;
`

export const Title = styled(Text)`
  font-size: ${({ theme }) => `${theme.fontSize.xxl33}px`};
  line-height: 42px;
  font-family: ${({ theme }) => theme.fontFamily.OverpassRegular};
  text-align: center;
`

export const LocationContainer = styled.View`
  flex-direction: row;
  height: 35px;
`

export const LocationIcon = styled.View`
  flex-direction: column;
  align-self: flex-end;
`

export const LocationWrapper = styled.View`
  flex-direction: column;
`

export const Location = styled(Text)`
  font-size: ${({ theme }) => `${theme.fontSize.sm18}px`};
  line-height: 38px;
`

export const Date = styled(Text)`
  font-size: ${({ theme }) => `${theme.fontSize.xs16}px`};
  color: ${({ theme }) => theme.colors.gray100};
  line-height: 20px;
`

export const SelectButton= styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.75,
}))<TouchableOpacityProps>``

export const SelectText = styled(Title)`
  font-size: ${({ theme }) => `${theme.fontSize.md22}px`};
  font-family: ${({ theme }) => theme.fontFamily.OverpassRegular};
  color: ${({ theme }) => theme.colors.gray100};
  line-height: 28px;
  text-decoration: underline;
`

export const BoldText = styled(Title)`
  font-family: ${({ theme }) => theme.fontFamily.OverpassBold};
`

export const CurrentWeather = styled(LocationWrapper)`
  align-items: center;
`

export const TempWrapper = styled(LocationWrapper)`
  flex-direction: row;
  align-items: flex-start;
`

export const TempNum = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamily.OverpassBold};
  font-size: 76px;
  line-height: 96px;
`

export const Weather = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamily.OverpassRegular};
  font-size: 30px;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.gray100};
`

export const Celcius = styled(Weather)`
  color: ${({ theme }) => theme.colors.white};
`
