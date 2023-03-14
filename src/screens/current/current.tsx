import climateChangeImg from '../../assets/climate-change.png'
import { useTheme } from 'styled-components/native'
import { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { WeatherDetails } from '../../weather-details'
import { WeatherDay } from '../../weather-day'
import { SimpleLineIcons } from '@expo/vector-icons'
import * as Location from 'expo-location'
import { FindWeatherApi } from '../../services/find-weather-api'
import { formatCountry, formatDate } from '../../utils/format'
import { ImageSourcePropType } from 'react-native'

import * as S from './styles'

type DataType = {
  current: {
    cloud: number
    condition: {
      code: number
      icon: ImageSourcePropType
      text: string
    },
      feelslike_c: number
      feelslike_f: number
      gust_kph: number
      gust_mph: number
      humidity: number
      is_day: number
      last_updated: string
      precip_in: number
      precip_mm: number
      pressure_in: number
      pressure_mb: number
      temp_c: number
      uv: number
      vis_km: number
      vis_miles: number
      wind_kph: number
    },
    location: {
      country: string
      name: string
      region: string
    }
  }

export const Current = (): JSX.Element => {
  const theme = useTheme()
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [data, setData] = useState<DataType | null>(null)

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()

    if (status !== 'granted') return

    const location = await Location.getCurrentPositionAsync({})

    setLocation(location)
  }

  useEffect(() => {
    (async () => {
      if (!location) return

      const data = await FindWeatherApi.getCurrentLocation(location.coords.latitude, location.coords.longitude)

      setData(data.data)
    })()
  }, [location])

  return (
    <S.HomeContainer isEmpty={Boolean(!data)}>
      <S.HomeWrapper isEmpty={Boolean(!data)}>
        {location && data ? (
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
                <S.Location>{data.location.name}, {formatCountry(data.location.country)}</S.Location>

                <S.Date>{formatDate(data.current.last_updated)}</S.Date>
              </S.LocationWrapper>
            </S.LocationContainer>

            <S.CurrentWeather>
              <S.Image source={data.current.condition.icon} />

              <S.TempWrapper>
                <S.TempNum>{data.current.temp_c}</S.TempNum>

                <S.Celsius>º</S.Celsius>
              </S.TempWrapper>

              <S.Weather>{data.current.condition.text}</S.Weather>
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
