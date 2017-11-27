import axios from 'axios'

const API_KEY = 'ebb83e3e2bde0be2f208b26b7e68dae9' //ENV['WEATHER_KEY']
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},br`
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
