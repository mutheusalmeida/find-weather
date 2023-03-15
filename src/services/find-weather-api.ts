import { weatherApi } from './api'

const { WEATHER_API_KEY } = process.env

export const FindWeatherApi = {
  getForecast: (lat: number, long: number) => {
    return weatherApi.get(`forecast.json?key=${WEATHER_API_KEY}&q=${lat},${long}&lang=pt`)
  }
}
