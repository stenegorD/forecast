import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import TitleBar from '../TitleBar/TitleBar';
import Weather7DaysItem from '../Weather7DaysItem/Weather7DaysItem';
import Preloader from '../Preloader/Preloader';
import { ThemeProvider, createTheme } from '@mui/material';

function Weather7DaysCard() {

  const {weatherForWeek, isLoading} = useSelector(store => store.weatherData);
  const [weeklyForecast, setWeeklyForecast] = useState(false);
  const theme = createTheme({
    typography: {
      fontSize: 12,
      fontFamily: [
        "Cairo",
        "Dosis"
      ].join(','),
    },
  });

  const hideWeeklyForecast = ()=>{
    setWeeklyForecast(!weeklyForecast);
  }

  return isLoading ? <Preloader/>  : ( <div>
        <TitleBar title={"Weekly forecast"} more hideWeeklyForecast={hideWeeklyForecast}></TitleBar>
       {weeklyForecast ? <ThemeProvider theme={theme}>
            { weatherForWeek.map((element) => <Weather7DaysItem key={element.dt} 
            description={element.weather[0].description}
            icon={element.weather[0].icon}
            humidity={element.humidity} 
            tempDay={element.temp.day}
            tempNight={element.temp.night}
            pressure={element.pressure}
            uvi={element.uvi}
            dt={element.dt}
            />
            )}
        </ThemeProvider> : null}  
  </div>
    
  )
}

export default Weather7DaysCard;