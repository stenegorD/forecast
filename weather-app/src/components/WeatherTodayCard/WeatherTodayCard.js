import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import TitleBar from '../TitleBar/TitleBar';
import { ThemeProvider, createTheme } from '@mui/material';


function WeatherTodayCard() {

    const {weatherData} = useSelector(store => store.weatherData)

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
        <div><TitleBar title={"Forecast for today"} more></TitleBar>
        <ThemeProvider theme={theme}>
        <Card sx={{
          // maxWidth: "300px",
          backgroundColor: "#000000",
          color: "#FFFFFF",
          opacity: "0.5",
          padding:"0",
          boxShadow:"none"
        }}>
          <CardContent sx={{
            // display:"flex", 
            // gap: "10px"
            }}>
          
          <Typography sx={{display:"flex",  justifyContent:"space-between", gap: "10px"}}>
              <Typography>Feels like </Typography>
              <Typography>{Math.round(weatherData?.main?.feels_like)} °C</Typography>
            </Typography>

          <Typography sx={{display:"flex",  justifyContent:"space-between", gap: "10px"}}>
              <Typography>Max temp </Typography>
              <Typography>{Math.round(weatherData?.main?.temp_max)} °C</Typography>
            </Typography>

            <Typography sx={{display:"flex",  justifyContent:"space-between", gap: "10px"}}>
              <Typography>Min temp </Typography>
              <Typography>{Math.round(weatherData?.main?.temp_min)} °C</Typography>
            </Typography>

            <Typography sx={{ display:"flex", justifyContent:"space-between", gap: "10px"}}>
              <Typography >Cloudiness </Typography>
              <Typography>{weatherData?.clouds?.all} %</Typography>
            </Typography>

            <Typography sx={{display:"flex",  justifyContent:"space-between", gap: "10px"}}>
              <Typography>Humidity </Typography>
              <Typography>{weatherData?.main?.humidity} %</Typography>
            </Typography>

            <Typography sx={{display:"flex",  justifyContent:"space-between", gap: "10px"}}>
              <Typography>Pressure </Typography>
              <Typography>{weatherData?.main?.pressure} hPa</Typography>
            </Typography>

          </CardContent>

            



        </Card>
        </ThemeProvider>
        </div>
        
      )
    }
    
    export default WeatherTodayCard;