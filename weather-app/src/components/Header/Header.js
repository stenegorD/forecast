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

  function handlerForecastCity(city) {
    if (city.length > 3) dispatch(weatherForecastCity(city));
  }

  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <div className={styles.logo}>
          <BsUmbrellaFill size="8rem" className={styles.logo_image} />
          <div className={styles.logo_title}>meteo umbrella </div>
        </div>
        <div className={styles.location_info}>
          <img src={locationData.country_flag} />
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
