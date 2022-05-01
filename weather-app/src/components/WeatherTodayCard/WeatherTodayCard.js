import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import TitleBar from '../TitleBar/TitleBar';

function WeatherTodayCard() {

    const {weatherData} = useSelector(store => store.weatherData)
    
      return (
        <><TitleBar title={"Today"}></TitleBar>
        <Card sx={{
          maxWidth: "300px", minHeight: "100px",
          backgroundColor: "#000000",
          color: "#FFFFFF",
          opacity: "0.5"
        }}>
          <CardContent>
            <Typography sx={{ display:"flex", justifyContent:"space-between"}}>
              <Typography >Cloudiness </Typography>
              <Typography>{weatherData?.clouds?.all} %</Typography>
            </Typography>

            <Typography sx={{display:"flex",  justifyContent:"space-between"}}>
              <Typography>Feels like </Typography>
              <Typography>{Math.round(weatherData?.main?.feels_like)} °C</Typography>
            </Typography>

            <Typography sx={{display:"flex",  justifyContent:"space-between"}}>
              <Typography>Humidity </Typography>
              <Typography>{weatherData?.main?.humidity} %</Typography>
            </Typography>

            <Typography sx={{display:"flex",  justifyContent:"space-between"}}>
              <Typography>Pressure </Typography>
              <Typography>{weatherData?.main?.pressure} hPa</Typography>
            </Typography>

            <Typography sx={{display:"flex",  justifyContent:"space-between"}}>
              <Typography>Max temp </Typography>
              <Typography>{Math.round(weatherData?.main?.temp_max)} °C</Typography>
            </Typography>

            <Typography sx={{display:"flex",  justifyContent:"space-between"}}>
              <Typography>Min temp </Typography>
              <Typography>{Math.round(weatherData?.main?.temp_min)} °C</Typography>
            </Typography>

          </CardContent>
        </Card></>
          
      )
    }
    
    export default WeatherTodayCard;