import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userLocationIp}  from './store/weatherDataActionCreator';
import './App.css';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import Footer from './components/Footer/Footer';
import ButtonScrollToTop from './components/ButtonScrollToTop/ButtonScrollToTop';

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
      <Footer/>
      <ButtonScrollToTop/>
    </div>
  
  );
}

export default App;
