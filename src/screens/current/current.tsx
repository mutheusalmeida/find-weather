import climateChangeImg from '../../assets/climate-change.png'
import rainingImg from '../../assets/raining.png'
import { useTheme } from 'styled-components/native'
import { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { WeatherDetails } from '../../weather-details'
import { WeatherDay } from '../../weather-day'
import { SimpleLineIcons } from '@expo/vector-icons'
import * as Location from 'expo-location'

import * as S from './styles'

export const Current = (): JSX.Element => {
  const theme = useTheme()
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const { WEATHER_API_KEY } = process.env

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') return

    const location = await Location.getCurrentPositionAsync({})

    setLocation(location)
  }

  return (
    <S.HomeContainer isEmpty={Boolean(!location)}>
      <S.HomeWrapper isEmpty={Boolean(!location)}>
        {location ? (
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

                <S.Celsius>º</S.Celsius>
              </S.TempWrapper>

              <S.Weather>Chuva Moderada</S.Weather>
            </S.CurrentWeather>

            <S.Details>
              {new Array(3).fill(0).map((_, index) => (
                <WeatherDetails
                  key={index}
                  icon={''}
                  value={''}
                  label={''}
                  hasBorder={index !== 3 && index !== 0}
                />
              ))}
            </S.Details>

            <S.DaysWeatherWrapper>
              <S.DaysWeatherHeader>
                <S.Today>Hoje</S.Today>

                <S.NextDays>
                  <S.NextDaysText>Próximos 5 dias</S.NextDaysText>

                  <SimpleLineIcons name="arrow-right" size={16} color={theme.colors.gray100} />
                </S.NextDays>
              </S.DaysWeatherHeader>

              <S.DaysWeather>
                {new Array(4).fill(0).map((_, index) => (
                  <WeatherDay
                    key={index}
                    icon={''}
                    value={''}
                    hour={''}
                  />
                ))}
              </S.DaysWeather>
            </S.DaysWeatherWrapper>
          </>
        ) : (
          <>
            <S.Title>Find<S.BoldText>Weather</S.BoldText></S.Title>

            <S.Image source={climateChangeImg} />

            <S.SelectButton onPress={getLocation}>
              <S.SelectText>Selecione aqui um local e encontre o clima em tempo real</S.SelectText>
            </S.SelectButton>
          </>
        )}
      </S.HomeWrapper>
    </S.HomeContainer>
  )
}
