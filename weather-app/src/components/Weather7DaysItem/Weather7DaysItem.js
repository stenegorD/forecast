import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function Weather7DaysItem({humidity, pressure, uvi, dt, tempDay }) {
    const {weatherForWeek} = useSelector(store => store.weatherData);
    
  return (
  <>
        <Card sx={{ 
          width: "100%",
          display:"flex",
          justifyContent: "space-between",
          gap: "30px",
          backgroundColor: "#000000",
          color: "#FFFFFF",
          opacity: "0.5",
          marginBottom: "5px"
          }}>
            <Typography>{new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(dt+"000")}</Typography>
            <Typography>{tempDay} °C</Typography>
            <Typography>{humidity} %</Typography>
            <Typography>{pressure} hPa</Typography>
            <Typography>{uvi}</Typography>
            
        </Card>
    
  </>
  )
}

export default Weather7DaysItem;