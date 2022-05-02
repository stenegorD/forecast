import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentTime } from '../../function/getCurrentTime';
import Preloader from '../Preloader/Preloader';


function WeatherCard() {

const {weatherData, locationData, isLoading, icon} = useSelector(store => store.weatherData)
console.log(weatherData);
console.log(locationData);
let date = new Date();
let options = { weekday: 'long'};
const currentTime = getCurrentTime();
const iconCode = icon.map(element => element.icon);

// isLoading ? <Preloader/> : 

  return (!weatherData ? <Preloader/> : 
    <Card sx={{ width: "1000px",
      backgroundColor: "#000000",
          color: "#FFFFFF",
          opacity: "0.6",
      }}>
      <CardContent sx={{display: "flex", justifyContent: "space-between", gap:"4rem", color:"#FFFFFF" }}>
      <Typography component="div" sx={{display:"flex"}}>
      <Typography component="div" sx={{display:"flex", flexDirection: "column"}}>
          
          
          <CardMedia sx={{width: "150px", objectFit: "contain"}}
            component="img"
            // image= {`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`} 
            image= {`http://openweathermap.org/img/wn/${iconCode}@2x.png`} 
            alt="weather_icon"
          />
          
          
          {/* <Typography component="div" sx={{alignSelf:"center", fontSize: "20px"}}>{ isLoading ? <Preloader/> : weatherData?.weather[0]?.description }</Typography> */}
      </Typography>
            <Typography sx={{fontSize:"150px"}}>
                {isLoading ? <Preloader/> : Math.round(weatherData?.main?.temp)} 
            </Typography>
            <Typography sx={{fontSize:"70px"}}>°C</Typography>
      </Typography>
      

        
        <Typography component="div">
             <Typography component="div" sx={{fontSize: "50px"}} >
                {weatherData?.name || locationData.city}, {locationData.country_name}
             </Typography>
            <Typography variant="body2" sx={{fontSize: "30px"}}>
              {new Intl.DateTimeFormat('en-US', options).format(date)}
            </Typography>
            <Typography variant="body2" sx={{fontSize: "30px"}}>
              {currentTime}
            </Typography>
            <CardMedia sx={{maxWidth: "100px"}}
                component="img"
                // height="140"
                image={locationData.country_flag}
                alt="country_flag"/>
        </Typography>
      </CardContent>
      
    </Card>
  );
    
}

export default WeatherCard;
