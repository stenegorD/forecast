import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { weatherForecastCity } from '../../store/weatherDataActionCreator';

function AutocompleteInput({ setCity }) {
  const dispatch = useDispatch();

  return (
    <div style={{ opacity: 0.9, color: '#000000' }}>
      <div style={{ width: '350px' }}>
        <AlgoliaPlaces
          onInput={(input) => { setCity(input.target.value); }}
          placeholder="Write a city here"
          onChange={({ suggestion }) => {
            dispatch(weatherForecastCity(suggestion.name));
          }}
          options={{
            apiId: process.env.REACT_APP_ALGOLIA_ID,
            apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
            language: ['en', 'uk'],
            type: ['city'],
            templates: {
					    suggestion(suggestion) {
							  return `${suggestion.name}, ${suggestion.administrative === undefined ? suggestion.county || suggestion.hit.administrative[0] : suggestion.administrative}, ${suggestion.country}`;
					    },
					    value(value) {
					      return `${value.name}, ${value.administrative === undefined ? value.county || value.name : value.administrative}, ${value.country}`;
              },
            },
          }}
          style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
            opacity: 0.4,
          }}
        />
      </div>
    </div>
  );
}

AutocompleteInput.propTypes = {
  setCity: PropTypes.func.isRequired,
};

export default React.memo(AutocompleteInput);
