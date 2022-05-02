import React from 'react';
import {useSelector} from 'react-redux';
import WeatherHourlyItem from '../WeatherHourlyItem/WeatherHourlyItem';
import styles from '../WeatherHourlyCard/WeatherHourlyCard.module.scss';
import TitleBar from '../TitleBar/TitleBar';

function WeatherHourlyCard() {
  const {weatherHourly} = useSelector(store => store.weatherData);
const weatherHourlySlice = weatherHourly.slice(0,24)
console.log(weatherHourlySlice);
  return (<>
    <TitleBar title={"Hourly forecast"} />
  <div className={styles.weatherHourlyCard}>
  {weatherHourlySlice.map((element) => <WeatherHourlyItem
  key={element.dt}
  clouds={element.clouds}
  humidity={element.humidity}
  temp={element.temp}
  feels_like={element.feels_like}
  dt={element.dt}
  description={element.weather[0].description}
  icon={element.weather[0].icon}
  wind_speed={element.wind_speed}
  />)}
  </div>
  </>
  )
}

export default WeatherHourlyCard;