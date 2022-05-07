import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCurrentAirPollution, userLocationIp}  from './store/weatherDataActionCreator';
import './App.css';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';

function App() {

  const {locationData} = useSelector(store => store.weatherData)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLocationIp()) 
    
  }, [])


  return (
    
    <div className="App">
      <Header/>
      <MainContainer/>
      
    </div>
  
  );
}

export default App;
