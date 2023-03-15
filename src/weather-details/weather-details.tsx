import { ImageSourcePropType } from 'react-native'

import * as S from './styles'

type WeatherDetailsProps = {
  icon: ImageSourcePropType
  value: string
  label: string
  hasBorder: boolean
  width: number
  height: number
}

export const WeatherDetails = ({
  icon,
  value,
  label,
  hasBorder,
  width,
  height,
}: WeatherDetailsProps): JSX.Element => {
  return (
    <S.WeatherContainer>
      {hasBorder && (
        <S.HorizontalLine />
      )}

      <S.Icon width={width} height={height} source={icon} />

      <S.TextWrapper>
        <S.Value>{value}</S.Value>

        <S.Label>{label}</S.Label>
      </S.TextWrapper>
    </S.WeatherContainer>
  )
}
