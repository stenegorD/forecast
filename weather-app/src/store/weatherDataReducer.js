import { GET_AIR_POLLUTION, SET_IS_LOADING, USER_LOCATION_FOR_IP, WEATHER_FORECAST_DATA_FOR_GEOLOCATION, WEATHER_FORECAST_DATA_FOR_SITY_NAME, WEATHER_FOR_WEEK, WEATHER_HISTORY, WEATHER_HOURLY } from "./weatherDataAction"

const initialState = {
    weatherData: [],
    isLaoding: true,
    locationData: [],
    weatherForWeek: [],
    historyData: [],
    weatherHourly: [],
    icon: [],
    airPollutionData: [],
}

const weatherDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case WEATHER_FORECAST_DATA_FOR_GEOLOCATION:
    return { ...state, weatherData: payload, icon: payload.weather }

  case WEATHER_FORECAST_DATA_FOR_SITY_NAME:
    return { ...state, weatherData: payload, icon: payload.weather }

  case WEATHER_FOR_WEEK:
    return { ...state, weatherForWeek: payload }

  case WEATHER_HOURLY:
    return { ...state, weatherHourly: payload }

  case WEATHER_HISTORY:
    return { ...state, historyData: payload}

  case USER_LOCATION_FOR_IP:
    return { ...state, locationData: payload }

  case GET_AIR_POLLUTION:
    return { ...state, airPollutionData: payload}

  case SET_IS_LOADING:
    return { ...state, isLaoding: payload }

  default:
    return state
  }
}

export default weatherDataReducer;
