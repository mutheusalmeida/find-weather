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
    forecastday: [
      {
        "hour": [
          {
            "time_epoch": 1678885200,
            "time": "2023-03-15 09:00",
            "temp_c": 26.4,
            "temp_f": 79.5,
            "is_day": 1,
            "condition": {
                "text": "Partly cloudy",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                "code": 1003
            },
            "wind_mph": 3.8,
            "wind_kph": 6.1,
            "wind_degree": 130,
            "wind_dir": "SE",
            "pressure_mb": 1014.0,
            "pressure_in": 29.94,
            "precip_mm": 0.0,
            "precip_in": 0.0,
            "humidity": 77,
            "cloud": 50,
            "feelslike_c": 28.9,
            "feelslike_f": 84.0,
            "windchill_c": 26.4,
            "windchill_f": 79.5,
            "heatindex_c": 28.9,
            "heatindex_f": 84.0,
            "dewpoint_c": 22.1,
            "dewpoint_f": 71.8,
            "will_it_rain": 0,
            "chance_of_rain": 0,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10.0,
            "vis_miles": 6.0,
            "gust_mph": 4.5,
            "gust_kph": 7.2,
            "uv": 7.0
          },
          {
            "time_epoch": 1678899600,
            "time": "2023-03-15 13:00",
            "temp_c": 31.2,
            "temp_f": 88.2,
            "is_day": 1,
            "condition": {
                "text": "Patchy rain possible",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                "code": 1063
            },
            "wind_mph": 1.3,
            "wind_kph": 2.2,
            "wind_degree": 89,
            "wind_dir": "E",
            "pressure_mb": 1011.0,
            "pressure_in": 29.85,
            "precip_mm": 0.3,
            "precip_in": 0.01,
            "humidity": 63,
            "cloud": 85,
            "feelslike_c": 36.2,
            "feelslike_f": 97.2,
            "windchill_c": 31.2,
            "windchill_f": 88.2,
            "heatindex_c": 36.2,
            "heatindex_f": 97.2,
            "dewpoint_c": 23.3,
            "dewpoint_f": 73.9,
            "will_it_rain": 1,
            "chance_of_rain": 79,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 9.0,
            "vis_miles": 5.0,
            "gust_mph": 1.8,
            "gust_kph": 2.9,
            "uv": 7.0
          },
          {
            "time_epoch": 1678914000,
            "time": "2023-03-15 17:00",
            "temp_c": 27.6,
            "temp_f": 81.7,
            "is_day": 1,
            "condition": {
                "text": "Light rain shower",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/353.png",
                "code": 1240
            },
            "wind_mph": 1.3,
            "wind_kph": 2.2,
            "wind_degree": 204,
            "wind_dir": "SSW",
            "pressure_mb": 1008.0,
            "pressure_in": 29.78,
            "precip_mm": 1.3,
            "precip_in": 0.05,
            "humidity": 80,
            "cloud": 53,
            "feelslike_c": 31.5,
            "feelslike_f": 88.7,
            "windchill_c": 27.6,
            "windchill_f": 81.7,
            "heatindex_c": 31.5,
            "heatindex_f": 88.7,
            "dewpoint_c": 23.8,
            "dewpoint_f": 74.8,
            "will_it_rain": 1,
            "chance_of_rain": 87,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10.0,
            "vis_miles": 6.0,
            "gust_mph": 2.2,
            "gust_kph": 3.6,
            "uv": 6.0
          },
          {
            "time_epoch": 1678935600,
            "time": "2023-03-15 23:00",
            "temp_c": 23.6,
            "temp_f": 74.5,
            "is_day": 0,
            "condition": {
                "text": "Light rain shower",
                "icon": "//cdn.weatherapi.com/weather/64x64/night/353.png",
                "code": 1240
            },
            "wind_mph": 5.6,
            "wind_kph": 9.0,
            "wind_degree": 86,
            "wind_dir": "E",
            "pressure_mb": 1012.0,
            "pressure_in": 29.88,
            "precip_mm": 1.6,
            "precip_in": 0.06,
            "humidity": 95,
            "cloud": 77,
            "feelslike_c": 26.1,
            "feelslike_f": 79.0,
            "windchill_c": 23.6,
            "windchill_f": 74.5,
            "heatindex_c": 26.1,
            "heatindex_f": 79.0,
            "dewpoint_c": 22.8,
            "dewpoint_f": 73.0,
            "will_it_rain": 0,
            "chance_of_rain": 68,
            "will_it_snow": 0,
            "chance_of_snow": 0,
            "vis_km": 10.0,
            "vis_miles": 6.0,
            "gust_mph": 9.4,
            "gust_kph": 15.1,
            "uv": 1.0
          }
        ]
      }
    ]
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

                <S.Date>{formatDate(data.location.localtime)}</S.Date>
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
