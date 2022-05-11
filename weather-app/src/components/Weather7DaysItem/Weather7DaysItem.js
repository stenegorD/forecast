import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

function Weather7DaysItem({humidity, pressure, uvi, dt, tempDay, tempNight, description, icon }) {
    
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
            <Typography sx={{flexBasis:"20%", paddingLeft: "1rem", alignSelf:"center"}}>{new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(dt+"000")}</Typography>
            <CardMedia sx={{width:"50px"}}
            image={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
            component="img"
            />
            <Typography sx={{flexBasis:"20%", alignSelf:"center"}}>{description}</Typography>
            <Typography sx={{flexBasis:"20%", alignSelf:"center"}}>{Math.round(tempDay)} °C</Typography>
            <Typography sx={{flexBasis:"20%", alignSelf:"center"}}>{Math.round(tempNight)} °C</Typography>
            <Typography sx={{flexBasis:"20%", alignSelf:"center"}}>{humidity} %</Typography>
            <Typography sx={{flexBasis:"20%", alignSelf:"center"}}>{pressure} hPa</Typography>
            <Typography sx={{flexBasis:"20%", alignSelf:"center"}}>{uvi}</Typography>
            
        </Card>
    
  </>
  )
}

export default Weather7DaysItem;