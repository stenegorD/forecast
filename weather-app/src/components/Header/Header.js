import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {weatherForecastSity}  from '../../store/weatherDataActionCreator';
import styles from './Header.module.scss';
import {ReactComponent as Umbrella} from '../../assets/umbrella.svg';

function Header() {

  const dispatch = useDispatch();

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
      
      <div className={styles.input}>
      <input value={value} type="text" placeholder='Search location' onChange={onChange}></input>
      <button onClick={()=>{handlerForecastSity(value)}}>search</button>
      </div>
        
    </div>
  )
}

export default Header;