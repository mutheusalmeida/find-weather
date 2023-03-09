import climateChangeImg from '../../assets/climate-change.png'
import rainingImg from '../../assets/raining.png'
import { TabBtn } from '../../tab-btn'
import { useTheme } from 'styled-components/native'
import { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import * as S from './styles'

export const Home = () => {
  const theme = useTheme()
  const [isEmpty, setIsEmpty] = useState(true)

  return (
    <S.HomeContainer isEmpty={isEmpty}>
      <S.HomeWrapper isEmpty={isEmpty}>
        {isEmpty ? (
          <>
            <S.Title>Find<S.BoldText>Weather</S.BoldText></S.Title>

            <S.Image source={climateChangeImg} />

            <S.SelectButton onPress={() => setIsEmpty(false)}>
              <S.SelectText>Selecione aqui um local e encontre o clima em tempo real</S.SelectText>
            </S.SelectButton>
          </>
        ) : (
          <>
            <S.LocationContainer>
              <S.LocationIcon>
                <MaterialIcons
                  name="location-on"
                  size={22}
                  color={theme.colors.white}
                />
              </S.LocationIcon>

              <S.LocationWrapper>
                <S.Location>A Corunã, Espanha</S.Location>

                <S.Date>Domingo, 01 Jan de 2023</S.Date>
              </S.LocationWrapper>
            </S.LocationContainer>

            <S.CurrentWeather>
              <S.Image source={rainingImg} />

              <S.TempWrapper>
                <S.TempNum>23</S.TempNum>

                <S.Celcius>º</S.Celcius>
              </S.TempWrapper>

              <S.Weather>Chuva Moderada</S.Weather>
            </S.CurrentWeather>
          </>
        )}
      </S.HomeWrapper>

      <TabBtn name="home" size={30} color={theme.colors.white} text='Home' />
    </S.HomeContainer>
  )
}
