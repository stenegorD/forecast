import instance from "./index";

export const getCurrentWeatherData = (lat, lon, API_KEY) => instance(`/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ua`);
    
export const getWeatherBySityName = (cityName, API_KEY) => instance(`/weather?q=${cityName}&appid=${API_KEY}&units=metric`);


export const getUserIP = (API_KEY_IP) => instance(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY_IP}`)




export const getMoreWeatherData = (lat, lon, API_KEY) => instance(`/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);


export const getHistoryData = (lat, lon, time, API_KEY) => instance(`/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&appid=${API_KEY}&units=metric`);


export const getHourlyForecastData = (lat, lon, API_KEY) => instance(`/forecast/hourly?lat=${lat}&lon=${lon}&appid=${API_KEY}`);


export const getHourlyForecastDataSity = (cityName, API_KEY) => instance(`/forecast/hourly?q=${cityName}&appid=${API_KEY}`);