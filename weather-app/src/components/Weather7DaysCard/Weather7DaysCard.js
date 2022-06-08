import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import useMatchMedia from 'use-match-media-hook';
import TitleBar from '../TitleBar/TitleBar';
import Weather7DaysItem from '../Weather7DaysItem/Weather7DaysItem';
import Weather7DaysItemTitleCard from '../Weather7DaysItem/Weather7DaysItemTitleCard';

function Weather7DaysCard() {
  const { weatherForWeek } = useSelector((store) => store.weatherData);
  const [weeklyForecast, setWeeklyForecast] = useState(false);
  const theme = createTheme({
    typography: {
      fontSize: 12,
      fontFamily: [
        'Cairo',
        'Dosis',
      ].join(','),
    },
  });

  const queries = [
    '(max-width: 479px)'];
  const [mobile] = useMatchMedia(queries);

  const handleClickHideWeeklyForecast = () => {
    setWeeklyForecast(!weeklyForecast);
  };

  return (
    <div>
      <TitleBar title="Weekly forecast" more handleClickHideWeeklyForecast={handleClickHideWeeklyForecast} />
      {weeklyForecast
        ? (
          <ThemeProvider theme={theme}>
            <Weather7DaysItemTitleCard mobile={mobile} />
            { weatherForWeek.map((element) => (
              <Weather7DaysItem
                key={element.dt}
                description={element.weather[0].description}
                icon={element.weather[0].icon}
                humidity={element.humidity}
                tempDay={element.temp.day}
                tempNight={element.temp.night}
                pressure={element.pressure}
                uvi={element.uvi}
                dt={element.dt}
                weeklyForecast={weeklyForecast}
                mobile={mobile}
              />
            ))}
          </ThemeProvider>
        )
        : null}
    </div>

  );
}

export default React.memo(Weather7DaysCard);
