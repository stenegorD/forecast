import React from 'react';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

function CurrentAirPollutionItem({
    aqi,
    co,
    nh3,
    no,
    no2,
    o3,
    pm2_5,
    pm10,
    so2,
    moreWeatherToday}) {

    const aqiConvert = (aqiValue) => {
        if(aqiValue === 1){
            return "Good"
        }
        if(aqiValue === 2){
            return "Fair"
        }
        if(aqiValue === 3){
            return "Moderate"
        }
        if(aqiValue === 4){
            return "Poor"
        }
        if(aqiValue === 5){
            return "Very Poor"
        }
    }

    const aqiConvertResult = aqiConvert(aqi);

   const newLocal = "img";
  return (<>
    
            <Typography sx={{display:"flex",  
            justifyContent:"space-between", 
            gap: "10rem"
            }}>
              <Typography>AQI </Typography>
              <Typography>{aqiConvertResult}</Typography>
            </Typography>
            {moreWeatherToday ? <>
                <Typography sx={{display:"flex",  justifyContent:"space-between"}}>
              <Typography>CO </Typography>
              <Typography>{co} μg/m <sup>3</sup></Typography>
                 </Typography>

                 <Typography sx={{display:"flex",  justifyContent:"space-between"}}>
              <Typography>NH<sub>3</sub> </Typography>
              <Typography>{nh3} μg/m <sup>3</sup></Typography>
                 </Typography>

                 <Typography sx={{display:"flex",  justifyContent:"space-between"}}>
              <Typography>NO </Typography>
              <Typography>{no} μg/m <sup>3</sup></Typography>
                 </Typography>

                 <Typography sx={{display:"flex",  justifyContent:"space-between"}}>
              <Typography>NO<sub>2</sub> </Typography>
              <Typography>{no2} μg/m <sup>3</sup></Typography>
                 </Typography>

                 <Typography sx={{display:"flex",  justifyContent:"space-between"}}>
              <Typography>O<sub>3</sub> </Typography>
              <Typography>{o3} μg/m <sup>3</sup></Typography>
                 </Typography>

                 <Typography sx={{display:"flex",  justifyContent:"space-between"}}>
              <Typography>PM<sub>2.5</sub> </Typography>
              <Typography>{pm2_5} μg/m <sup>3</sup></Typography>
                 </Typography>

                 <Typography sx={{display:"flex",  justifyContent:"space-between"}}>
              <Typography>PM<sub>10</sub> </Typography>
              <Typography>{pm10} μg/m <sup>3</sup></Typography>
                 </Typography>

                 <Typography sx={{display:"flex",  justifyContent:"space-between", gap: "10px"}}>
              <Typography>SO<sub>2</sub> </Typography>
              <Typography>{so2} μg/m <sup>3</sup></Typography>
                 </Typography>

                        </>
            : null}
            
    </>
  )
}

export default CurrentAirPollutionItem