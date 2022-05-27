import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import TitleBar from '../TitleBar/TitleBar';
import Weather7DaysItem from '../Weather7DaysItem/Weather7DaysItem';
import { ThemeProvider, createTheme } from '@mui/material';
import Weather7DaysItemTitleCard from '../Weather7DaysItem/Weather7DaysItemTitleCard';

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

  return ( <div>
        <TitleBar title={"Weekly forecast"} more hideWeeklyForecast={hideWeeklyForecast}></TitleBar>
        <ThemeProvider theme={theme}>
        <Weather7DaysItemTitleCard />  
        </ThemeProvider>
       {weeklyForecast ? 
       <ThemeProvider theme={theme}>
      
            { weatherForWeek.map((element) =>  
            <Weather7DaysItem key={element.dt} 
            description={element.weather[0].description}
            icon={element.weather[0].icon}
            humidity={element.humidity} 
            tempDay={element.temp.day}
            tempNight={element.temp.night}
            pressure={element.pressure}
            uvi={element.uvi}
            dt={element.dt}
            weeklyForecast={weeklyForecast}
            />          )}
        </ThemeProvider> 
        : null}    
  </div>
    
  )
}

export default React.memo(Weather7DaysCard);