import instance from './index';

export const getCurrentWeatherData = (lat, lon) => instance(`/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY_WEATHER}&units=metric`);
// find for sity name
export const getWeatherBySityName = (cityName) => instance(`/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY_WEATHER}&units=metric`);
// find for ip
export const getUserIP = () => instance(`${process.env.REACT_APP_IP_URL}/ipgeo?apiKey=${process.env.REACT_APP_API_KEY_IP}`);
// 7 days forecast
export const getMoreWeatherData = (lat, lon) => instance(`/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${process.env.REACT_APP_API_KEY_WEATHER}&units=metric`);
// hourly forecast
export const getHourlyForecastData = (lat, lon) => instance(`/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${process.env.REACT_APP_API_KEY_WEATHER}&units=metric`);
// air pollution
export const getAirPullution = (lat, lon) => instance(`/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY_WEATHER}`);
