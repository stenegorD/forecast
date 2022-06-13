import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { shallowEqual, useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import {
  WiHumidity,
  WiSunrise,
  WiSunset,
  WiBarometer,
  WiThermometer,
  WiWindy,
  WiStrongWind,
  WiCloud,
  WiSnow,
  WiRain,
} from 'react-icons/wi';
import TitleBar from '../TitleBar/TitleBar';
import { convertMsToHM } from '../../function/convertMsToHM';
import CurrentAirPollutionCard from '../CurrentAirPollution/CurrentAirPollutionCard';

function WeatherTodayCard() {
  const { weatherData } = useSelector((store) => store.weatherData, shallowEqual);
  const [moreWeatherToday, setMoreWeatherToday] = useState(false);

  const sunsetTime = convertMsToHM(`${weatherData?.sys?.sunset}000`);
  const sunriseTime = convertMsToHM(`${weatherData?.sys?.sunrise}000`);

  const theme = createTheme({
    typography: {
      fontSize: 12,
      fontFamily: [
        'Cairo',
        'Dosis',
      ].join(','),
    },
  });

  const forecastStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    '@media screen and (max-width: 479px)': { flexDirection: 'row', gap: '0', justifyContent: 'space-between' },
  };
  const mobileStyles = {
    '@media screen and (max-width: 479px)': {
      flex: '0 0 33.3333%',
    },
  };

  const handleClickMoreWeatherToday = () => {
    setMoreWeatherToday(!moreWeatherToday);
  };

  return (
    <div>
      <TitleBar title="Forecast for today" more handleClickMoreWeatherToday={handleClickMoreWeatherToday} />
      <ThemeProvider theme={theme}>
        <Card sx={{
          backgroundColor: '#000000',
          color: '#FFFFFF',
          opacity: '0.5',
          padding: '0',
          boxShadow: 'none',
        }}
        >
          <CardContent>
            <Typography
              component="div"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                '@media screen and (max-width: 479px)': {
                  flexDirection: 'column',
                  gap: '0px',
                },
              }}
            >

              <Typography component="div" sx={forecastStyles}>
                <Typography sx={mobileStyles}>Feels like </Typography>
                <WiThermometer size="1.5rem" />
                <Typography sx={{ ...mobileStyles, textAlign: 'end' }}>
                  {Math.round(weatherData?.main?.feels_like)}
                  {' '}
                  °C
                </Typography>
              </Typography>

              <Typography component="div" sx={forecastStyles}>
                <Typography sx={mobileStyles}>Max temp </Typography>
                <WiThermometer sx={mobileStyles} size="1.5rem" />
                <Typography sx={{ ...mobileStyles, textAlign: 'end' }}>
                  {Math.round(weatherData?.main?.temp_max)}
                  {' '}
                  °C
                </Typography>
              </Typography>

              <Typography component="div" sx={forecastStyles}>
                <Typography sx={mobileStyles}>Min temp </Typography>
                <WiThermometer sx={mobileStyles} size="1.5rem" />
                <Typography sx={{ ...mobileStyles, textAlign: 'end' }}>
                  {Math.round(weatherData?.main?.temp_min)}
                  {' '}
                  °C
                </Typography>
              </Typography>

              <Typography component="div" sx={forecastStyles}>
                <Typography sx={mobileStyles}>Cloudiness </Typography>
                <WiCloud sx={mobileStyles} size="1.5rem" />
                <Typography sx={{ ...mobileStyles, textAlign: 'end' }}>
                  {weatherData?.clouds?.all}
                  {' '}
                  %
                </Typography>
              </Typography>

              <Typography component="div" sx={forecastStyles}>
                <Typography sx={mobileStyles}>Humidity </Typography>
                <WiHumidity sx={mobileStyles} size="1.5rem" />
                <Typography sx={{ ...mobileStyles, textAlign: 'end' }}>
                  {weatherData?.main?.humidity}
                  {' '}
                  %
                </Typography>
              </Typography>

              <Typography component="div" sx={forecastStyles}>
                <Typography sx={mobileStyles}>Pressure </Typography>
                <WiBarometer sx={{ ...mobileStyles }} size="1.5rem" />
                <Typography sx={{ ...mobileStyles, textAlign: 'end' }}>
                  {weatherData?.main?.pressure}
                  {' '}
                  hPa
                </Typography>
              </Typography>

              <Typography component="div" sx={forecastStyles}>
                <Typography sx={mobileStyles}>Wind speed </Typography>
                <WiWindy size="1.5rem" />
                <Typography sx={{ ...mobileStyles, textAlign: 'end' }}>
                  {weatherData?.wind?.speed}
                  {' '}
                  m/sec
                </Typography>
              </Typography>

              <Typography component="div" sx={forecastStyles}>
                <Typography sx={mobileStyles}>Wind gust </Typography>
                <WiStrongWind size="1.5rem" />
                <Typography sx={{ ...mobileStyles, textAlign: 'end' }}>
                  {weatherData?.wind?.gust}
                  {' '}
                  m/sec
                </Typography>
              </Typography>

              <Typography component="div" sx={forecastStyles}>
                <Typography sx={mobileStyles}>Sunset </Typography>
                <WiSunset size="1.5rem" />
                <Typography sx={{ ...mobileStyles, textAlign: 'end' }}>{sunsetTime}</Typography>
              </Typography>

              <Typography component="div" sx={forecastStyles}>
                <Typography sx={mobileStyles}>Sunrise </Typography>
                <WiSunrise size="1.5rem" />
                <Typography sx={{ ...mobileStyles, textAlign: 'end' }}>{sunriseTime}</Typography>
              </Typography>

              {weatherData.rain
                ? (
                  <Typography component="div" sx={forecastStyles}>
                    <Typography sx={mobileStyles}>Rain </Typography>
                    <WiRain size="1.5rem" />
                    <Typography sx={{ ...mobileStyles, textAlign: 'end' }}>
                      {weatherData?.rain?.['1h']}
                      {' '}
                      mm
                      {' '}
                    </Typography>
                  </Typography>
                )
                : null}

              {weatherData.snow
                ? (
                  <Typography component="div" sx={forecastStyles}>
                    <Typography sx={mobileStyles}>Snow </Typography>
                    <WiSnow size="1.5rem" />
                    <Typography sx={{ ...mobileStyles, textAlign: 'end' }}>
                      {weatherData?.snow?.['1h']}
                      {' '}
                      mm
                      {' '}
                    </Typography>
                  </Typography>
                )
                : null}
            </Typography>
            <Typography component="div" sx={{ paddingTop: '1rem' }}>

              <CurrentAirPollutionCard moreWeatherToday={moreWeatherToday} />

            </Typography>
          </CardContent>

        </Card>
      </ThemeProvider>
    </div>

  );
}

export default React.memo(WeatherTodayCard);
