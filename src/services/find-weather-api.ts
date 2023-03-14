import { weatherApi } from './api'

const { WEATHER_API_KEY } = process.env

export const FindWeatherApi = {
  getCurrentLocation: (lat: number, long: number) => {
    return weatherApi.get(`current.json?key=${WEATHER_API_KEY}&q=${lat},${long}&lang=pt`)
  }
}
