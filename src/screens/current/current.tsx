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
import miniCloud from '../../assets/raining-cloud-miniature.png'
import miniDrop from '../../assets/drop-miniature.png'
import miniWind from '../../assets/wind-miniature.png'

import * as S from './styles'

type HourType = {
  time: string
  temp_c: string
  condition: { icon: string }
}

type ForecastType = {
  hour: HourType[]
}

type DataType = {
  location: {
    name: string
    country: string
    localtime: string
  },
  current: {
      temp_c: number
      condition: {
          text: string
          icon: string
      },
      wind_kph: number
      humidity: number
      cloud: number
  },
  forecast: {
    forecastday: ForecastType[]
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

      const data = await FindWeatherApi.getForecast(location.coords.latitude, location.coords.longitude)

      setData(data.data)
    })()
  }, [location])

  const weatherDetails = [
    {
      icon: miniDrop,
      value: `${data?.current.humidity}%`,
      label: `Umidade`,
      width: 14,
      height: 20,
    },
    {
      icon: miniWind,
      value: `${data?.current.wind_kph}km/h`,
      label: 'Veloc. Vento',
      width: 26,
      height: 20,
    },
    {
      icon: miniCloud,
      value: `${data?.current.cloud}%`,
      label: 'Chuva',
      width: 24,
      height: 20,
    },
  ]

  const today = data?.forecast.forecastday[0].hour.filter(item => ['09:00', '13:00', '17:00', '23:00'].find(hour => item.time.includes(hour)))

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

                <S.Date>{formatDate(data.location.localtime).getFullDate()}</S.Date>
              </S.LocationWrapper>
            </S.LocationContainer>

            <S.CurrentWeather>
              <S.WeatherIcon source={{ uri: `http://${data.current.condition.icon}` }} />

              <S.TempWrapper>
                <S.TempNum>{data.current.temp_c}</S.TempNum>

                <S.Celsius>º</S.Celsius>
              </S.TempWrapper>

              <S.Weather>{data.current.condition.text}</S.Weather>
            </S.CurrentWeather>

            <S.Details>
              {weatherDetails.map(({ icon, label, value, width, height }, index) => (
                <WeatherDetails
                  key={index}
                  icon={icon}
                  value={value}
                  label={label}
                  width={width}
                  height={height}
                  hasBorder={index !== weatherDetails.length && index !== 0}
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
                {today?.map(({ condition, temp_c, time }, index) => (
                  <WeatherDay
                    key={index}
                    icon={condition.icon}
                    value={temp_c}
                    hour={time}
                  />
                ))}
              </S.DaysWeather>
            </S.DaysWeatherWrapper>
          </>
        ) : (
          <>
            <S.Title>Find<S.BoldText>Weather</S.BoldText></S.Title>

            <S.HomeIcon source={climateChangeImg} />

            <S.SelectButton onPress={getLocation}>
              <S.SelectText>Selecione aqui um local e encontre o clima em tempo real</S.SelectText>
            </S.SelectButton>
          </>
        )}
      </S.HomeWrapper>
    </S.HomeContainer>
  )
}
