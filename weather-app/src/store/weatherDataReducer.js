import { USER_LOCATION_FOR_IP, WEATHER_FORECAST_DATA_FOR_GEOLOCATION, WEATHER_FORECAST_DATA_FOR_SITY_NAME } from "./weatherDataAction"

const initialState = {
    weatherData: [],
    isLaoding: true,
    locationData: [],
}

const weatherDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case WEATHER_FORECAST_DATA_FOR_GEOLOCATION:
    return { ...state, weatherData: payload }

  case WEATHER_FORECAST_DATA_FOR_SITY_NAME:
    return { ...state, weatherData: payload }

  case USER_LOCATION_FOR_IP:
    return { ...state, locationData: payload }

  default:
    return state
  }
}

export default weatherDataReducer;
