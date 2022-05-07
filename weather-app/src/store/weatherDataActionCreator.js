import { getAirPullution, getCurrentWeatherData, getHourlyForecastData, getHourlyForecastDataSity, getMoreWeatherData, getUserIP, getWeatherBySityName } from "../axios/axiosRequest";
import { GET_AIR_POLLUTION, SET_IS_LOADING, USER_LOCATION_FOR_IP, WEATHER_FORECAST_DATA_FOR_GEOLOCATION, WEATHER_FORECAST_DATA_FOR_SITY_NAME, WEATHER_FOR_WEEK, WEATHER_HOURLY } from "./weatherDataAction";


// with geolocation
export const weatherForecastGeo = () => async (dispatch) => {

    const geoSuccess = async function (position) {
                const result = await getCurrentWeatherData(position.coords.latitude, position.coords.longitude);
    console.log(result);
    dispatch({type: WEATHER_FORECAST_DATA_FOR_GEOLOCATION, payload: result.data})

    const resultMore = await getMoreWeatherData(position.coords.latitude, position.coords.longitude);
    dispatch({type: WEATHER_FOR_WEEK, payload: resultMore.data.daily})  
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

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
}



export const weatherForecastSity = (sityName) => async (dispatch, getState) => {
    // dispatch(setIsLoadingData(true))
    const result = await getWeatherBySityName(sityName)
    console.log(result);
    
    if(result.status === 200){
        dispatch({type: WEATHER_FORECAST_DATA_FOR_SITY_NAME, payload: result.data})
        // dispatch(setIsLoadingData(false))
        const {weatherData} = getState();
        const latitude = Math.floor(weatherData.weatherData.coord.lat * 100) / 100;
        const longitude = Math.floor(weatherData.weatherData.coord.lon * 100) / 100;
        const resultWeeklyForecast = await getMoreWeatherData(latitude, longitude);
        console.log(resultWeeklyForecast.data.daily);
        dispatch({type: WEATHER_FOR_WEEK, payload: resultWeeklyForecast.data.daily})
        const resultHourlyForecast = await getHourlyForecastData(latitude, longitude);
        console.log(resultHourlyForecast);
        dispatch({type: WEATHER_HOURLY, payload: resultHourlyForecast.data.hourly })
    }
    
}


//
export const getWeatherForWeek = () => async (dispatch, getStore) =>{
    
        const {weatherData} = getStore()
        const latitude = Math.floor(weatherData.locationData.latitude * 100) / 100;
        const longitude = Math.floor(weatherData.locationData.longitude * 100) / 100;
        // dispatch(setIsLoadingData(true))
         const result = await getMoreWeatherData(latitude, longitude);
         console.log(result);
        dispatch({type: WEATHER_FOR_WEEK, payload: result.data.daily})
        // dispatch(setIsLoadingData(false))
}


// местоположение по ip
export const userLocationIp = () => async (dispatch, getStore) => {
   
    const resultIp = await getUserIP();
    if(resultIp.status === 200){
    dispatch({type: USER_LOCATION_FOR_IP, payload: resultIp.data})
    
    
    const {weatherData} = getStore()
    const latitude = Math.floor(weatherData.locationData.latitude * 100) / 100;
    const longitude = Math.floor(weatherData.locationData.longitude * 100) / 100;
    //current forecast
    // dispatch(setIsLoadingData(true))
    const resultCurrentForecast = await getCurrentWeatherData(latitude, longitude);
    console.log(resultCurrentForecast);
    dispatch({type: WEATHER_FORECAST_DATA_FOR_GEOLOCATION, payload: resultCurrentForecast.data})
    
    //weekly forecast
     const resultWeeklyForecast = await getMoreWeatherData(latitude, longitude);
     console.log(resultWeeklyForecast.data.daily);
    dispatch({type: WEATHER_FOR_WEEK, payload: resultWeeklyForecast.data.daily})
    
    
    //current hourly forecast
    const resultHourlyForecast = await getHourlyForecastData(latitude, longitude);
    console.log(resultHourlyForecast);
    dispatch({type: WEATHER_HOURLY, payload: resultHourlyForecast.data.hourly })
    
    //current air pollution
    const resultAirPollution = await getAirPullution(latitude, longitude);
    console.log(resultAirPollution);
    if(resultAirPollution.status === 200){
        dispatch({type: GET_AIR_POLLUTION, payload: resultAirPollution})
        // dispatch(setIsLoadingData(false))
    }
    
    }
    
}





export const setIsLoadingData = (isLoading) => ({
    type: SET_IS_LOADING,
    payload: isLoading,
  });


export const getCurrentAirPollution = () => async (dispatch, getStore) => {
    const {weatherData} = getStore()
    const latitude = Math.floor(weatherData.locationData.latitude * 100) / 100;
    const longitude = Math.floor(weatherData.locationData.longitude * 100) / 100;
    const resultAirPollution = await getAirPullution(latitude, longitude);
    console.log(resultAirPollution);
    dispatch({type: GET_AIR_POLLUTION, payload: resultAirPollution})

}