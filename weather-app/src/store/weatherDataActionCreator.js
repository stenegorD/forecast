import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  getAirPullution,
  getCurrentWeatherData,
  getHourlyForecastData,
  getMoreWeatherData,
  getUserIP,
  getWeatherBySityName,
} from '../axios/axiosRequest';
import {
  GET_AIR_POLLUTION,
  SET_IS_LOADING,
  USER_LOCATION_FOR_IP,
  WEATHER_FORECAST_DATA_FOR_GEOLOCATION,
  WEATHER_FORECAST_DATA_FOR_SITY_NAME,
  WEATHER_FOR_WEEK, WEATHER_HOURLY,
} from './weatherDataAction';

export const setIsLoadingData = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});

// weather by sity name
export const weatherForecastCity = (sityName) => async (dispatch, getState) => {
  try {
    dispatch(setIsLoadingData(true));
    // current weather by city name
    const resultWeatherBySityName = await getWeatherBySityName(sityName);
    if (resultWeatherBySityName.status === 200) {
      dispatch({ type: WEATHER_FORECAST_DATA_FOR_SITY_NAME, payload: resultWeatherBySityName.data });
      const { weatherData } = getState();
      const latitude = Math.floor(weatherData.weatherData.coord.lat * 100) / 100;
      const longitude = Math.floor(weatherData.weatherData.coord.lon * 100) / 100;
      // weekly forecast
      const resultWeeklyForecast = await getMoreWeatherData(latitude, longitude);
      if (resultWeeklyForecast.status === 200) {
        dispatch({ type: WEATHER_FOR_WEEK, payload: resultWeeklyForecast.data.daily });
      }
      // current hourly forecast
      const resultHourlyForecast = await getHourlyForecastData(latitude, longitude);
      if (resultHourlyForecast.status === 200) {
        dispatch({ type: WEATHER_HOURLY, payload: resultHourlyForecast.data.hourly });
      }
      // current air pollution
      const resultAirPollution = await getAirPullution(latitude, longitude);
      if (resultAirPollution.status === 200) {
        dispatch({ type: GET_AIR_POLLUTION, payload: resultAirPollution.data.list });
      }
    }
  } catch (error) {
    if (error.toJSON().status === 404) {
      Notify.failure('Enter wrong city name', { showOnlyTheLastOne: true });
    }
  } finally {
    dispatch(setIsLoadingData(false));
  }
};

// location for ip and weather for coordinates
export const userLocationIp = () => async (dispatch, getStore) => {
  try {
    dispatch(setIsLoadingData(true));

    const resultIp = await getUserIP();
    if (resultIp.status === 200) {
      dispatch({ type: USER_LOCATION_FOR_IP, payload: resultIp.data });
      const { weatherData } = getStore();
      const latitude = Math.floor(weatherData.locationData.latitude * 100) / 100;
      const longitude = Math.floor(weatherData.locationData.longitude * 100) / 100;

      // current forecast
      const resultCurrentForecast = await getCurrentWeatherData(latitude, longitude);
      if (resultCurrentForecast.status === 200) {
        dispatch({ type: WEATHER_FORECAST_DATA_FOR_GEOLOCATION, payload: resultCurrentForecast.data });
      }
      // weekly forecast
      const resultWeeklyForecast = await getMoreWeatherData(latitude, longitude);
      if (resultWeeklyForecast.status === 200) {
        dispatch({ type: WEATHER_FOR_WEEK, payload: resultWeeklyForecast.data.daily });
      }
      // current hourly forecast
      const resultHourlyForecast = await getHourlyForecastData(latitude, longitude);
      if (resultHourlyForecast.status === 200) {
        dispatch({ type: WEATHER_HOURLY, payload: resultHourlyForecast.data.hourly });
      }
      // current air pollution
      const resultAirPollution = await getAirPullution(latitude, longitude);
      if (resultAirPollution.status === 200) {
        dispatch({ type: GET_AIR_POLLUTION, payload: resultAirPollution.data.list });
      }
    }
  } catch (error) {
    Notify.failure('Something went wrong', { showOnlyTheLastOne: true });
  } finally {
    dispatch(setIsLoadingData(false));
  }
};

// current weather for coordinates suggestion in autocomplete
export const getCurrentWeatherForCoord = (latitude, longitude) => async (dispatch) => {
  try {
    dispatch(setIsLoadingData(true));
    // current forecast
    const resultCurrentForecast = await getCurrentWeatherData(latitude, longitude);
    if (resultCurrentForecast.status === 200) {
      dispatch({ type: WEATHER_FORECAST_DATA_FOR_GEOLOCATION, payload: resultCurrentForecast.data });
    }
    // weekly forecast
    const resultWeeklyForecast = await getMoreWeatherData(latitude, longitude);
    if (resultWeeklyForecast.status === 200) {
      dispatch({ type: WEATHER_FOR_WEEK, payload: resultWeeklyForecast.data.daily });
    }
    // current hourly forecast
    const resultHourlyForecast = await getHourlyForecastData(latitude, longitude);
    if (resultHourlyForecast.status === 200) {
      dispatch({ type: WEATHER_HOURLY, payload: resultHourlyForecast.data.hourly });
    }
    // current air pollution
    const resultAirPollution = await getAirPullution(latitude, longitude);
    if (resultAirPollution.status === 200) {
      dispatch({ type: GET_AIR_POLLUTION, payload: resultAirPollution.data.list });
    }
  } catch (error) {
    Notify.failure('Something went wrong', { showOnlyTheLastOne: true });
  } finally {
    dispatch(setIsLoadingData(false));
  }
};
