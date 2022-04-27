import React from 'react';
import WeatherCard from '../WetaherCard/WeatherCard';
import styles from './MainContainer.module.scss';

function MainContainer() {
  return (
    <div className={styles.mainContainer}>
        

        <WeatherCard/>
    </div>
  )
}

export default MainContainer;