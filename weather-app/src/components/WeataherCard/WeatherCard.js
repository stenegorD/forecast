import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { getCurrentTime } from '../../function/getCurrentTime';
import { ThemeProvider, createTheme } from '@mui/material';

function WeatherCard() {

const {weatherData, icon} = useSelector(store => store.weatherData)

let date = new Date();
let options = { weekday: 'long'};
const currentTime = getCurrentTime();
const iconCode = icon.map(element => element.icon);
const currentDescription = icon.map(element=> element.description);
const roundTemp = Math.round(weatherData?.main?.temp);

const theme = createTheme({
  typography: {
    fontFamily: [
      "Cairo",
      "Dosis"
    ].join(','),
  },
});


  return (
  <ThemeProvider theme={theme}>
    <Card sx={{ width: "100%", background: "none", boxShadow: "none"}}>
      <CardContent sx={{display: "flex", justifyContent: "space-between", gap:"4rem", color:"#FFFFFF" }}>
      <Typography component="div" sx={{display:"flex", gap:"10px", minWidth:"400px"}}>
      <Typography component="div" sx={{display:"flex", flexDirection: "column"}}>
          
          <CardMedia sx={{width: "150px", objectFit: "contain"}}
            component="img"
            image= {`http://openweathermap.org/img/wn/${iconCode}@2x.png`} 
            alt="weather_icon"
          />
          
          <Typography component="div" sx={{alignSelf:"center", fontSize: "20px"}}>{currentDescription}</Typography>
      </Typography>
            <Typography sx={{fontSize:"150px"}}>
                {roundTemp} 
            </Typography>
            <Typography sx={{fontSize:"70px"}}>°C</Typography>
      </Typography>
      
        <Typography component="div" sx={{minWidth: "40%"}}>
             <Typography component="div" sx={{fontSize: "50px"}} >
                {weatherData?.name}
             </Typography>
            <Typography variant="body2" sx={{fontSize: "30px"}}>
              {new Intl.DateTimeFormat('en-US', options).format(date)}
            </Typography>
            <Typography variant="body2" sx={{fontSize: "30px"}}>
              {currentTime}
            </Typography>
        </Typography>
      </CardContent>  
    </Card>
    </ThemeProvider>
  );
    
}

export default React.memo(WeatherCard);
