import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { userLocationIp } from './store/weatherDataActionCreator';
import './App.css';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import Footer from './components/Footer/Footer';
import ButtonScrollToTop from './components/ButtonScrollToTop/ButtonScrollToTop';
import ForecastFallback from './components/ForecastFallback/ForecastFallback';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLocationIp());
  }, []);

  return (
    <div className="App">
      <Header />
      <ErrorBoundary FallbackComponent={ForecastFallback}>
        <MainContainer />
      </ErrorBoundary>
      <Footer />
      <ButtonScrollToTop />
    </div>
  );
}

export default App;
