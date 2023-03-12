import miniCloud from '../assets/mini-cloud.png'

import * as S from './styles'

type WeatherDayProps = {
  icon: string
  value: string
  hour: string
}

export const WeatherDay = ({ icon, value, hour }: WeatherDayProps): JSX.Element => {
  return (
    <S.WeatherContainer>
      <S.Value>
        <S.Num>23</S.Num>

        <S.Ceusius>º</S.Ceusius>
      </S.Value>

      <S.Icon source={miniCloud} />

      <S.Hour>09:00</S.Hour>
    </S.WeatherContainer>
  )
}
