import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import Fade from '@mui/material/Fade';
import PropTypes from 'prop-types';

function Weather7DaysItem({
  humidity, pressure, uvi, dt, tempDay, tempNight, description, icon, weeklyForecast, mobile,
}) {
  return (

    <Fade in={weeklyForecast} timeout={500} unmountOnExit easing={{ enter: 'ease-in', exit: 'ease-out' }}>
      <div>
        <Card sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#000000',
          color: '#FFFFFF',
          opacity: '0.5',
          marginBottom: '5px',
          '@media screen and (max-width: 479px)': {
            flexDirection: 'column',
            gap: '0px',
            padding: '1rem 0rem',
          },
        }}
        >
          <Typography
            component="div"
            sx={{
              flexBasis: '20%',
              paddingLeft: '1rem',
              alignSelf: 'center',
              '@media screen and (max-width: 479px)': {
                minWidth: '70px', alignSelf: 'start', paddingRight: '1rem', backgroundColor: '#006400', borderRadius: '0px 4px 4px 0px',
              },
            }}
          >
            {new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(`${dt}000`)}
          </Typography>
          <CardMedia
            sx={{ width: '50px', '@media screen and (max-width: 479px)': { alignSelf: 'center' } }}
            image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            component="img"
          />
          <Typography component="div" sx={{ flexBasis: '20%', alignSelf: 'center' }}>{description}</Typography>
          {mobile ? (
            <>
              <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1rem 0 1rem' }}>
                <Typography sx={{ flexBasis: '50%' }}>Temperature at day</Typography>
                <Typography sx={{ flexBasis: '20%', alignSelf: 'center', textAlign: 'end' }}>
                  {Math.round(tempDay)}
                  {' '}
                  °C
                </Typography>
              </Typography>
              <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 1rem' }}>
                <Typography sx={{ flexBasis: '50%' }}>Temperature at night</Typography>
                <Typography sx={{ flexBasis: '20%', alignSelf: 'center', textAlign: 'end' }}>
                  {Math.round(tempNight)}
                  {' '}
                  °C
                </Typography>
              </Typography>
              <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 1rem' }}>
                <Typography sx={{ flexBasis: '50%' }}>Humidity</Typography>
                <Typography sx={{ flexBasis: '20%', alignSelf: 'center', textAlign: 'end' }}>
                  {humidity}
                  {' '}
                  %
                </Typography>
              </Typography>
              <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 1rem' }}>
                <Typography sx={{ flexBasis: '50%' }}>Pressure</Typography>
                <Typography sx={{ flexBasis: '20%', alignSelf: 'center', textAlign: 'end' }}>
                  {' '}
                  {pressure}
                  {' '}
                  hPa
                </Typography>
              </Typography>
              <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 1rem' }}>
                <Typography sx={{ flexBasis: '50%' }}>UVI</Typography>
                <Typography sx={{ flexBasis: '20%', alignSelf: 'center', textAlign: 'end' }}>{uvi}</Typography>
              </Typography>
            </>
          ) : (
            <>
              <Typography component="div" sx={{ flexBasis: '14%', alignSelf: 'center' }}>
                {' '}
                {Math.round(tempDay)}
                {' '}
                °C
              </Typography>
              <Typography component="div" sx={{ flexBasis: '14%', alignSelf: 'center' }}>
                {' '}
                {Math.round(tempNight)}
                {' '}
                °C
              </Typography>
              <Typography component="div" sx={{ flexBasis: '14%', alignSelf: 'center' }}>
                {' '}
                {humidity}
                {' '}
                %
              </Typography>
              <Typography component="div" sx={{ flexBasis: '14%', alignSelf: 'center' }}>
                {' '}
                {pressure}
                {' '}
                hPa
              </Typography>
              <Typography component="div" sx={{ flexBasis: '14%', alignSelf: 'center' }}>
                {' '}
                {uvi}
              </Typography>
            </>
          )}

        </Card>
      </div>
    </Fade>
  );
}

Weather7DaysItem.propTypes = {
  humidity: PropTypes.number,
  pressure: PropTypes.number,
  uvi: PropTypes.number,
  dt: PropTypes.number,
  tempDay: PropTypes.number,
  tempNight: PropTypes.number,
  description: PropTypes.string,
  icon: PropTypes.string,
  weeklyForecast: PropTypes.bool.isRequired,
  mobile: PropTypes.bool.isRequired,
};

Weather7DaysItem.defaultProps = {
  humidity: '',
  pressure: '',
  uvi: '',
  dt: 0,
  tempDay: '',
  tempNight: '',
  description: '',
  icon: '',
};

export default React.memo(Weather7DaysItem);
