import React from 'react';
import WeatherCard from '../WeataherCard/WeatherCard';
import Weather7DaysCard from '../Weather7DaysCard/Weather7DaysCard';
import WeatherHourlyCard from '../WeatherHourlyCard/WeatherHourlyCard';
import WeatherTodayCard from '../WeatherTodayCard/WeatherTodayCard';
import styles from './MainContainer.module.scss';
import {useSelector} from 'react-redux';
import Preloader from '../Preloader/Preloader';

function MainContainer() {
  const {isLoading} = useSelector(store => store.weatherData)
  return (
    <div className={styles.mainContainer}>
      {isLoading ? <Preloader/> : 
         <>
      <WeatherCard/>
      <WeatherTodayCard/>
      <div className={styles.cardContainer}>
          <WeatherHourlyCard/>
      </div>
        <Weather7DaysCard/>
        </>
      }              
    </div>
  )
}

export default React.memo(MainContainer);