import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {weatherForecastSity}  from '../../store/weatherDataActionCreator';
import styles from './Header.module.scss';
import { FaSearchLocation } from 'react-icons/fa';
import {BsUmbrellaFill} from 'react-icons/bs'

function Header() {

  const dispatch = useDispatch();
  const {weatherData, locationData, isLoading} = useSelector(store => store.weatherData)

function handlerForecastSity(sity) {
    dispatch(weatherForecastSity(sity))
}

const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div className={styles.header}>
      <div className={styles.logo}>
      <BsUmbrellaFill size={"8em"} className={styles.logo_image} />
      <div className={styles.logo_title}>meteo umbrella </div>
      </div>
      <div className={styles.location_info}>
        <img src={locationData.country_flag}></img>
        <div>{locationData.city}, {locationData.country_name}</div>
      </div>
      <div className={styles.input}>
      <input value={value} type="text" placeholder='Search location' onChange={onChange} onKeyPress={(e) => e.key === 'Enter' && handlerForecastSity(value)}></input>
      <FaSearchLocation size={"3em"} className={styles.input_icon}  onClick={()=>{handlerForecastSity(value)}}/>
      </div>
        
    </div>
  )
}

export default Header;