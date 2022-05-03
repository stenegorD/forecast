import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {weatherForecastSity}  from '../../store/weatherDataActionCreator';
import styles from './Header.module.scss';
import {ReactComponent as Umbrella} from '../../assets/umbrella.svg';
import { FaSearchLocation } from 'react-icons/fa';

function Header() {

  const dispatch = useDispatch();
  const {weatherData, locationData, isLoading, icon} = useSelector(store => store.weatherData)

function handlerForecastSity(sity) {
    dispatch(weatherForecastSity(sity))
}

const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div className={styles.header}>
      
      
      <div className={styles.logo}>meteo umbrella </div>
      <div className={styles.location_info}>
        <img src={locationData.country_flag}></img>
        <div>{locationData.city}, {locationData.country_name}</div>
      </div>
      <div className={styles.input}>
      <input value={value} type="text" placeholder='Search location' onChange={onChange}></input>
      <FaSearchLocation size={"3em"} className={styles.input_icon}  onClick={()=>{handlerForecastSity(value)}}/>
      {/* <button onClick={()=>{handlerForecastSity(value)}}>search</button> */}
      </div>
        
    </div>
  )
}

export default Header;