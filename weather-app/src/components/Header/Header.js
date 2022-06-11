import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaSearchLocation } from 'react-icons/fa';
import { BsUmbrellaFill } from 'react-icons/bs';
import { weatherForecastCity } from '../../store/weatherDataActionCreator';
import styles from './Header.module.scss';
import AutocompleteInput from '../Autocomplete/AutocompleteInput';

function Header() {
  const dispatch = useDispatch();
  const { locationData } = useSelector((store) => store.weatherData);
  const [city, setCity] = useState('');

  function handlerForecastCity(cityName) {
    if (city.length > 3) dispatch(weatherForecastCity(cityName));
  }

  function handleClickLogo() {
    window.location.href = '/';
  }

  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <div className={styles.logo} onClick={handleClickLogo} role="link" tabIndex={0}>
          <BsUmbrellaFill size="8rem" className={styles.logo_image} />
          <div className={styles.logo_title}>meteo umbrella </div>
        </div>
        <div className={styles.location_info}>
          <img alt="country flag" src={locationData.country_flag} />
          <div>
            {locationData.city}
            ,
            {' '}
            {locationData.country_name}
          </div>
        </div>
      </div>
      <div className={styles.input}>
        <AutocompleteInput setCity={setCity} />
        <FaSearchLocation size="3rem" className={styles.input_icon} onClick={() => { handlerForecastCity(city); }} />
      </div>
    </div>
  );
}

export default React.memo(Header);
