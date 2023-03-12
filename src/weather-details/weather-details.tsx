import miniCloud from '../assets/raining-cloud-miniature.png'

import * as S from './styles'

type WeatherDetailsProps = {
  icon: string
  value: string
  label: string
  hasBorder: boolean
}

export const WeatherDetails = ({ icon, value, label, hasBorder }: WeatherDetailsProps): JSX.Element => {
  return (
    <S.WeatherContainer>
      {hasBorder && (
        <S.HorizontalLine />
      )}

      <S.Icon source={miniCloud} />

      <S.TextWrapper>
        <S.Value>24%</S.Value>

        <S.Label>Umidade</S.Label>
      </S.TextWrapper>
    </S.WeatherContainer>
  )
}
