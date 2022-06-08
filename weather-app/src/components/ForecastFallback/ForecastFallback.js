import React from 'react';
import { BiError } from 'react-icons/bi';
import PropTypes from 'prop-types';

function ForecastFallback({ resetErrorBoundary }) {
  return (
    <div style={{ color: '#FFFFFF', textAlign: 'center', flex: '1 0 auto' }}>
      <div>
        <BiError size="10rem" />
      </div>
      <div role="alert">
        <p style={{ fontSize: '2rem' }}>Oops something went wrong !</p>
        <button type="button" onClick={resetErrorBoundary}>Try again</button>
      </div>
    </div>
  );
}

ForecastFallback.propTypes = {
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ForecastFallback;
