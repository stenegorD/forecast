import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CurrentAirPollutionItem from '../CurrentAirPollutionItem/CurrentAirPollutionItem';

function CurrentAirPollutionCard({ moreWeatherToday }) {
  const { airPollutionData } = useSelector((store) => store.weatherData);

  return (
    <>

      {airPollutionData.map((element) => (
        <CurrentAirPollutionItem
          key={element.dt}
          aqi={element.main.aqi}
          {...element.components}
          moreWeatherToday={moreWeatherToday}
        />
      ))}

    </>
  );
}

CurrentAirPollutionCard.propTypes = {
  moreWeatherToday: PropTypes.bool.isRequired,
};

export default React.memo(CurrentAirPollutionCard);
