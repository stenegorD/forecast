import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import WeatherCard from '../WeataherCard/WeatherCard';
import styles from './MainContainer.module.scss';
import Preloader from '../Preloader/Preloader';

const WeatherTodayCard = React.lazy(() => import(/* webpackChunkName: 'WeatherTodayCard' */ '../WeatherTodayCard/WeatherTodayCard'));
const WeatherHourlyCard = React.lazy(() => import(/* webpackChunkName: 'WeatherHourlyCard' */ '../WeatherHourlyCard/WeatherHourlyCard'));
const Weather7DaysCard = React.lazy(() => import(/* webpackChunkName: 'Weather7DaysCard' */ '../Weather7DaysCard/Weather7DaysCard'));

function MainContainer() {
  const { isLoading } = useSelector((store) => store.weatherData);
  return (
    <div className={styles.mainContainer}>
      {isLoading ? <Preloader />
        : (
          <Suspense fallback={<Preloader />}>
            <WeatherCard />
            <WeatherTodayCard />
            <div className={styles.cardContainer}>
              <WeatherHourlyCard />
            </div>
            <Weather7DaysCard />
          </Suspense>
        )}
    </div>
  );
}

export default React.memo(MainContainer);
