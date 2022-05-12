import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import TitleBar from '../TitleBar/TitleBar';
import { ThemeProvider, createTheme } from '@mui/material';
import { convertMsToHM } from '../../function/convertMsToHM';
import CurrentAirPollutionCard from '../CurrentAirPollution/CurrentAirPollutionCard';
import {WiHumidity, WiSunrise, WiSunset, WiBarometer, WiThermometer, WiWindy, WiStrongWind, WiCloud, WiSnow, WiRain} from 'react-icons/wi';

function WeatherTodayCard() {

    const {weatherData} = useSelector(store => store.weatherData);
    const [moreWeatherToday, setMoreWeatherToday] = useState(false);

    const sunsetTime = convertMsToHM(weatherData?.sys?.sunset+ "000");
    const sunriseTime = convertMsToHM(weatherData?.sys?.sunrise + "000");

    const theme = createTheme({
      typography: {
        fontSize: 12,
        fontFamily: [
          "Cairo",
          "Dosis"
        ].join(','),
      },
    });

    const forecastStyles = {
      display:"flex", 
      flexDirection:"column", 
      alignItems:"center", 
      gap: "5px"
    }
   

    const handleClickMore = () =>{
      setMoreWeatherToday(!moreWeatherToday)
    }
    
    

      return (
        <div><TitleBar title={"Forecast for today"} more handleClickMore={handleClickMore}></TitleBar>
        <ThemeProvider theme={theme}>
        <Card sx={{
          backgroundColor: "#000000",
          color: "#FFFFFF",
          opacity: "0.5",
          padding:"0",
          boxShadow:"none"
        }}>
          <CardContent sx={{
            display:"flex", 
            justifyContent: "space-between",
            flexDirection:"column"
            }}>
              <Typography component={"div"} sx={{display:"flex", justifyContent:"space-between"}} >
          
          <Typography sx={forecastStyles}>
              <Typography>Feels like </Typography>
              <WiThermometer  size={"1.5rem"} />
              <Typography>{Math.round(weatherData?.main?.feels_like)} °C</Typography>
            </Typography>

          <Typography sx={forecastStyles}>
              <Typography>Max temp </Typography>
              <WiThermometer size={"1.5rem"} />
              <Typography>{Math.round(weatherData?.main?.temp_max)} °C</Typography>
            </Typography>

            <Typography sx={forecastStyles}>
              <Typography>Min temp </Typography>
              <WiThermometer size={"1.5rem"} />
              <Typography>{Math.round(weatherData?.main?.temp_min)} °C</Typography>
            </Typography>

            <Typography sx={forecastStyles}>
              <Typography >Cloudiness </Typography>
              <WiCloud size={"1.5rem"} />
              <Typography>{weatherData?.clouds?.all} %</Typography>
            </Typography>

            <Typography sx={forecastStyles}>
              <Typography>Humidity </Typography>
              <WiHumidity size={"1.5rem"} />
              <Typography>{weatherData?.main?.humidity} %</Typography>
            </Typography>

            <Typography sx={forecastStyles}>
              <Typography>Pressure </Typography>
              <WiBarometer size={"1.5rem"} />
              <Typography>{weatherData?.main?.pressure} hPa</Typography>
            </Typography>

            <Typography sx={forecastStyles}>
              <Typography>Wind speed </Typography>
              <WiWindy size={"1.5rem"}/>
              <Typography>{weatherData?.wind?.speed} m/sec</Typography>
            </Typography>

            <Typography sx={forecastStyles}>
              <Typography>Wind gust </Typography>
              <WiStrongWind size={"1.5rem"} />
              <Typography>{weatherData?.wind?.gust} m/sec</Typography>
            </Typography>

            <Typography sx={forecastStyles}>
              <Typography>Sunset </Typography>
              <WiSunset size={"1.5rem"} />
              <Typography>{sunsetTime}</Typography>
            </Typography>

            <Typography sx={forecastStyles}>
              <Typography>Sunrise </Typography>
              <WiSunrise size={"1.5rem"} />
              <Typography>{sunriseTime}</Typography>
            </Typography>


            {weatherData.rain ? 
            <Typography sx={forecastStyles}>
              <Typography>Rain </Typography>
              <WiRain size={"1.5rem"} ></WiRain>
              <Typography>{weatherData?.rain?.["1h"]} mm </Typography>
            </Typography> 
            : null}

            {weatherData.snow ? 
            <Typography sx={forecastStyles}>
              <Typography>Snow </Typography>
              <WiSnow size={"1.5rem"} ></WiSnow>
              <Typography>{weatherData?.snow?.["1h"]} mm </Typography>
            </Typography> 
            : null}
          </Typography>
          <Typography component={"div"} sx={{paddingTop: "1rem"}} >
              <CurrentAirPollutionCard moreWeatherToday={moreWeatherToday} />
          </Typography>
          </CardContent>

        </Card>
        </ThemeProvider>
        </div>
        
      )
    }
    
export default WeatherTodayCard;