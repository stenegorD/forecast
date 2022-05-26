import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardMedia, ThemeProvider, createTheme } from '@mui/material';
import { getHours } from '../../function/getHours';
import Fade from '@mui/material/Fade';

function WeatherHourlyItem({
  pressure,
  humidity,
  temp,
  feels_like,
  dt,
  description,
  icon,
  wind_speed,
  }) {

    const theme = createTheme({
      typography: {
        fontSize: 12,
        fontFamily: [
          "Cairo",
          "Dosis"
        ].join(','),
      },
    });
    
  return (
    <Fade timeout={1000} in={Boolean(dt)} unmountOnExit>
      <div>
    <ThemeProvider theme={theme}>

    <Card sx={{ 
      display:"flex",
      flexDirection: "column",
      padding:"1rem",
      backgroundColor: "#000000",
      color: "#FFFFFF",
      opacity: "0.5",
      marginBottom: "5px",
      minWidth:"150px",
      transition: "2s",
      '@media screen and (max-width: 479px)': {
        // width:"100%"
      }
      }}>
        
        <Typography sx={{alignSelf:"start"}}>{getHours(dt+"000")}</Typography>
      <CardMedia sx={{maxWidth: "50px", alignSelf:"center"}}
      image={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
      component="img"
      />
        <Typography sx={{alignSelf:"center", }} >{description}</Typography>
        <Typography sx={{alignSelf:"center"}} >{Math.round(temp)} °C</Typography>
        <Typography component="div" sx={{display:"flex", justifyContent:"space-between" }}>
        <Typography >Feels like </Typography>
        <Typography >{Math.round(feels_like)} °C</Typography>
        </Typography>
        <Typography component="div" sx={{display:"flex", justifyContent:"space-between" }}>
        <Typography >Pressure </Typography>
        <Typography>{pressure} hPa</Typography>
        </Typography>
        <Typography component="div" sx={{display:"flex", justifyContent:"space-between", gap:"10px"}}>
        <Typography >Wind speed </Typography>
        <Typography>{wind_speed} m/sec</Typography>
        </Typography>
        <Typography component="div" sx={{display:"flex", justifyContent:"space-between" }}>
        <Typography >Humidity </Typography>
        <Typography>{humidity} %</Typography>
        </Typography>
    </Card>
         
    </ThemeProvider>
    </div>
    </Fade>
  )
}

export default React.memo(WeatherHourlyItem);