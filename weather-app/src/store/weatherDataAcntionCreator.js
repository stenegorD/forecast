import { getCurrentWeatherData, getHourlyForecastDataSity, getUserIP, getWeatherBySityName } from "../axios/axiosRequest";
import { USER_LOCATION_FOR_IP, WEATHER_FORECAST_DATA_FOR_GEOLOCATION, WEATHER_FORECAST_DATA_FOR_SITY_NAME } from "./weatherDataAction";

const API_KEY = "fc947bb873fc2bfba673087909bd0e77";
const API_KEY_IP = "cba60b1b3c674fb1bf4326a3474c5506";

// with geolocation
export const weatherForecastGeo = () => async (dispatch) => {

    const geoSuccess = async function (position) {
                const result = await getCurrentWeatherData(position.coords.latitude, position.coords.longitude, API_KEY);
    console.log(result);
    dispatch({type: WEATHER_FORECAST_DATA_FOR_GEOLOCATION, payload: result.data})
    };

    const geoOptions = {
        enableHighAccuracy: true,
        timeout: 10 * 1000,
    };

    const geoError = function (error) {
        console.log('Error occurred. Error code: ' + error.code);
        // error.code can be:
            //   0: unknown error
            //   1: permission denied
            //   2: position unavailable (error response from location provider)
            //   3: timed out
      };
console.log(navigator.geolocation);

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
}

export const weatherForecastSity = (sityName) => async (dispatch) => {
    const result = await getWeatherBySityName(sityName, API_KEY)
    console.log(result);
    if(result.status === 200){
        dispatch({type: WEATHER_FORECAST_DATA_FOR_SITY_NAME, payload: result.data})
    }
    
}


export const hourlyForecastWeatherForSity = (sityName = "London") => async (dispatch) => {
    const result = await getHourlyForecastDataSity(sityName, API_KEY);
    console.log(result);
}



// местоположение по ip
export const userLocationIp = () => async (dispatch) => {
    const result = await getUserIP(API_KEY_IP);
    console.log(result);
    if(result.status === 200){
    dispatch({type: USER_LOCATION_FOR_IP, payload: result.data})
    }
}



// const result = getHourlyForecastDataSity("London", "fc947bb873fc2bfba673087909bd0e77");
    // console.log(result());
// hourlyForecastWeatherForSity("Kyiv")