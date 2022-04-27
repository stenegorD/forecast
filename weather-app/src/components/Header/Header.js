import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {userLocationIp, weatherForecastGeo, weatherForecastSity}  from '../../store/weatherDataAcntionCreator';
import styles from './Header.module.scss';

function Header() {
const dispatch = useDispatch();

    
function handlerForecast() {
        // dispatch(weatherForecastGeo()) 
        dispatch(userLocationIp()) 
    }

function handlerForecastSity(sity) {
    dispatch(weatherForecastSity(sity))
}

const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div className={styles.header}>
      <div className={styles.logo}>meteo umbrella 24/7</div>
      <div className={styles.input}>
      <input value={value} type="text" placeholder='Search location' onChange={onChange}></input>
      <button onClick={()=>{handlerForecastSity(value)}}>search</button>
      </div>
      
      
    
        <button onClick={handlerForecast}>zapros</button>
        
    </div>
  )
}

export default Header;