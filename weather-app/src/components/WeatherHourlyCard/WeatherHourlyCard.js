import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import WeatherHourlyItem from '../WeatherHourlyItem/WeatherHourlyItem';
import styles from '../WeatherHourlyCard/WeatherHourlyCard.module.scss';
import TitleBar from '../TitleBar/TitleBar';

function WeatherHourlyCard() {
  
  const [initialIndex, setInitialIndex] = useState(0);
  const [finalIndex, setFinalIndex] = useState(5);
  const {weatherHourly} = useSelector(store => store.weatherData);
  const weatherHourlySlice = weatherHourly.slice(initialIndex, finalIndex);

  const handleArrowClick = (event) => {
    if(finalIndex !== 45 && event.currentTarget.id === 'BsArrowRight'){
      setInitialIndex(initialIndex + 5)
      setFinalIndex(finalIndex + 5)
    }    
    if(initialIndex !== 0 && event.currentTarget.id === 'BsArrowLeft'){
      setFinalIndex(finalIndex - 5)
      setInitialIndex(initialIndex - 5)
    }   
  }

  return (<div>
    <div>
    <TitleBar title={"Hourly forecast for today"} arrow handleArrowClick={handleArrowClick}/>
    </div>
  <div className={styles.weatherHourlyCard}>
    
  {weatherHourlySlice.map((element) => <WeatherHourlyItem
  key={element.dt}
  pressure={element.pressure}
  humidity={element.humidity}
  temp={element.temp}
  feels_like={element.feels_like}
  dt={element.dt}
  description={element.weather[0].description}
  icon={element.weather[0].icon}
  wind_speed={element.wind_speed}
  />)}
  </div>
  </div>
  )
}

export default WeatherHourlyCard;