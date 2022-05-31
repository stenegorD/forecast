import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardMedia, ThemeProvider, createTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { getHours } from '../../function/getHours';

function WeatherHourlyItem({
  pressure,
  humidity,
  temp,
  feels_like,
  dt,
  description,
  icon,
  wind_speed,
  hideHourlyWeather,
}) {
  const theme = createTheme({
    typography: {
      fontSize: 12,
      fontFamily: [
        'Cairo',
        'Dosis',
      ].join(','),
    },
  });

  return (hideHourlyWeather
    ? (
      <ThemeProvider theme={theme}>
        <Card sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem',
          backgroundColor: '#000000',
          color: '#FFFFFF',
          opacity: '0.5',
          marginBottom: '5px',
          minWidth: '150px',
          transition: '2s',
        }}
        >

          <Typography sx={{ alignSelf: 'start' }}>{getHours(`${dt}000`)}</Typography>
          <CardMedia
            sx={{ maxWidth: '50px', alignSelf: 'center' }}
            image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            component="img"
          />
          <Typography sx={{ alignSelf: 'center' }}>{description}</Typography>
          <Typography sx={{ alignSelf: 'center' }}>
            {Math.round(temp)}
            {' '}
            °C
          </Typography>
          <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Feels like </Typography>
            <Typography>
              {Math.round(feels_like)}
              {' '}
              °C
            </Typography>
          </Typography>
          <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Pressure </Typography>
            <Typography>
              {pressure}
              {' '}
              hPa
            </Typography>
          </Typography>
          <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
            <Typography>Wind speed </Typography>
            <Typography>
              {wind_speed}
              {' '}
              m/sec
            </Typography>
          </Typography>
          <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Humidity </Typography>
            <Typography>
              {humidity}
              {' '}
              %
            </Typography>
          </Typography>

        </Card>
      </ThemeProvider>
    ) : null

  );
}

WeatherHourlyItem.propTypes = {
  pressure: PropTypes.number,
  humidity: PropTypes.number,
  temp: PropTypes.number,
  feels_like: PropTypes.number,
  dt: PropTypes.number,
  description: PropTypes.string,
  icon: PropTypes.string,
  wind_speed: PropTypes.number,
  hideHourlyWeather: PropTypes.bool.isRequired,
};

WeatherHourlyItem.defaultProps = {
  pressure: 0,
  humidity: 0,
  temp: 0,
  feels_like: 0,
  dt: 0,
  description: '',
  icon: PropTypes.string,
  wind_speed: 0,
};

export default React.memo(WeatherHourlyItem);
