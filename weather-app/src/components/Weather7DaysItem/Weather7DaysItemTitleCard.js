import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

function Weather7DaysItemTitleCard({ mobile }) {
  const titleCardStyles = {
    flexBasis: '14%',
  };

  return (!mobile

    ? (
      <Card sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#000000',
        color: '#CFCFCF',
        opacity: '0.5',
        marginBottom: '5px',
        padding: '5px 0px 5px 0px',
      }}
      >

        <Typography sx={{ flexBasis: '20%', paddingLeft: '1rem' }}>Weekday</Typography>
        <Typography sx={{ width: '50px' }}>Icons</Typography>
        <Typography sx={{ flexBasis: '20%' }}>Description</Typography>
        <Typography sx={titleCardStyles}>Temp day</Typography>
        <Typography sx={titleCardStyles}>Temp night</Typography>
        <Typography sx={titleCardStyles}>Humidity</Typography>
        <Typography sx={titleCardStyles}>Pressure</Typography>
        <Typography sx={titleCardStyles}>UVI</Typography>
      </Card>
    ) : null
  );
}

Weather7DaysItemTitleCard.propTypes = {
  mobile: PropTypes.bool.isRequired,
};

export default React.memo(Weather7DaysItemTitleCard);
