import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

function WeatherCard() {

const {weatherData, locationData} = useSelector(store => store.weatherData)
console.log(weatherData);
console.log(locationData);
let date = new Date();
let options = { weekday: 'long'};
console.log((new Date()).getHours());
console.log((new Date()).getMinutes());
  return (
    <Card sx={{ width: "100vw", 
    // backgroundImage: `url(${locationData.country_flag})`,
    //  backgroundRepeat: "no-repeat",
    //   backgroundSize: "contain", 
      }}>
      {/* <CardMedia
        component="img"
        height="140"
        // image={locationData.country_flag}
        alt="flag"
      /> */}
      <CardContent sx={{display: "flex", justifyContent: "space-between"}}>
      <Typography component="div" sx={{display:"flex"}}>
      <Typography component="div" sx={{display:"flex", flexDirection: "column"}}>
          <CardMedia sx={{width: "150px", objectFit: "contain"}}
            component="img"
            image={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
            alt="weather_icon"
          />
          <Typography component="div" sx={{alignSelf:"center"}}>{weatherData?.weather[0].description}</Typography>
      </Typography>
            <Typography sx={{fontSize:"120px"}}>
                {Math.round(weatherData?.main?.temp)} 
            </Typography>
            <Typography sx={{fontSize:"50px"}}>°C</Typography>

            
      </Typography>
      

        
        <Typography component="div">
             <Typography gutterBottom variant="h5" component="div">
                {weatherData?.name || locationData.city}, {locationData.country_name}
             </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Intl.DateTimeFormat('en-US', options).format(date)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${(new Date()).getHours()}:${(new Date()).getMinutes()}`}
            </Typography>
            <CardMedia sx={{maxWidth: "100px"}}
                component="img"
                // height="140"
                image={locationData.country_flag}
                alt="country_flag"/>
        </Typography>
      </CardContent>




      <Card sx={{maxWidth:"300px", minHeight: "100px"}}>
        <Typography>Today</Typography>
        <Typography>Cloudiness {weatherData?.clouds?.all} %</Typography>
        <Typography>Feels like {weatherData?.main?.feels_like} °C</Typography>
        <Typography>Humidity {weatherData?.main?.humidity} %</Typography>
        <Typography>Pressure {weatherData?.main?.pressure}</Typography>
        <Typography>{weatherData?.main?.temp_max} °C</Typography>
        <Typography>{weatherData?.main?.temp_min} °C</Typography>
      </Card>
      
    </Card>
  );
}

export default WeatherCard;
