import React from 'react';
import WeatherCard from '../WeataherCard/WeatherCard';
import Weather7DaysCard from '../Weather7DaysCard/Weather7DaysCard';
import WeatherTodayCard from '../WeatherTodayCard/WeatherTodayCard';
import styles from './MainContainer.module.scss';

function MainContainer() {
  return (
    <div className={styles.mainContainer}>
        
        <WeatherCard/>
        
        <WeatherTodayCard/>
        <Weather7DaysCard/>
        
    </div>
  )
}

export default MainContainer;