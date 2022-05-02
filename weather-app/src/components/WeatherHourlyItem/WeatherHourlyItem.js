import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

function WeatherHourlyItem({
  clouds,
  humidity,
  temp,
  feels_like,
  dt,
  description,
  icon,
  wind_speed,}) {
  return (
    <Card sx={{ 
      minWidth:"150px",
      // width: "100%",
      display:"flex",
      flexDirection: "column",
      alignItems: "center",
      // gap: "30px",
      backgroundColor: "#000000",
      color: "#FFFFFF",
      opacity: "0.5",
      marginBottom: "5px",
      }}>
      <CardMedia sx={{maxWidth: "50px"}}
      image={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
      component="img"
      />
        <Typography>{description}</Typography>
        <Typography>{temp} °C</Typography>
        <Typography>Feels like {feels_like} °C</Typography>
        <Typography>Cloudiness {clouds} %</Typography>
        <Typography>{wind_speed} m/sec</Typography>
        <Typography>Humidity {humidity} %</Typography>


    </Card>
  )
}

export default WeatherHourlyItem