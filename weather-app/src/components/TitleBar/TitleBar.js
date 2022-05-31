import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CgMore } from 'react-icons/cg';
import PropTypes from 'prop-types';

function TitleBar({
  title, handleClickMoreWeatherToday, handleClickHideWeeklyForecast, handleClickHideHourlyWeather,
}) {
  function handleClikMore() {
    if (handleClickMoreWeatherToday) {
      handleClickMoreWeatherToday();
    }
    if (handleClickHideWeeklyForecast) {
      handleClickHideWeeklyForecast();
    }
    if (handleClickHideHourlyWeather) {
      handleClickHideHourlyWeather();
    }
  }
  return (
    <Card sx={{
      marginBottom: '1rem',
      marginTop: '1rem',
      backgroundColor: '#000000',
      color: '#FFFFFF',
      opacity: '0.5',
      display: 'flex',
      justifyContent: 'space-between',
      '@media screen and (max-width: 479px)': { marginBottom: '0.5rem', marginTop: '0.5rem' },
    }}
    >

      <Typography sx={{ paddingLeft: '1rem', alignSelf: 'center', fontFamily: 'Cairo' }}>{title}</Typography>
      <CgMore size="2em" title="See more" onClick={handleClikMore} style={{ marginRight: '1rem', cursor: 'pointer' }} />
    </Card>
  );
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  handleClickMoreWeatherToday: PropTypes.func,
  handleClickHideWeeklyForecast: PropTypes.func,
  handleClickHideHourlyWeather: PropTypes.func,
};

TitleBar.defaultProps = {
  handleClickMoreWeatherToday: () => { },
  handleClickHideWeeklyForecast: () => { },
  handleClickHideHourlyWeather: () => { },
};

export default React.memo(TitleBar);
