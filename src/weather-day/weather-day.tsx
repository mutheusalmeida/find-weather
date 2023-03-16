import { formatDate } from '../utils/format'
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
        <S.Num>{value}</S.Num>

        <S.Ceusius>º</S.Ceusius>
      </S.Value>

      <S.Icon source={{ uri: `http://${icon}` }} />

      <S.Hour>{formatDate(hour).getHours()}:00</S.Hour>
    </S.WeatherContainer>
  )
}
