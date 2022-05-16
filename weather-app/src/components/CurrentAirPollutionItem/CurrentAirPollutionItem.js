import React from 'react';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

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
    const airPollutionStyles = {
      display:"flex", 
      flexDirection:"column", 
      alignItems:"center", 
      gap: "10px",
    }

  return (<>
    
            <Typography sx={{display:"flex",  justifyContent:"space-between", borderTop: "1px solid #FFFFFF", paddingTop:"1rem"}}>
              <Typography>AQI </Typography>
              <Typography>{aqiConvertResult}</Typography>
            </Typography>
            <Fade in={moreWeatherToday} timeout={500} unmountOnExit>
               <div>
            {moreWeatherToday ? 
            <Typography sx={{display:"flex", justifyContent:"space-between", paddingTop:"1rem" }}>
                <Typography sx={airPollutionStyles}>
              <Typography>CO </Typography>
              <Typography >{co} μg/m <sup>3</sup></Typography>
                 </Typography>

                 <Typography sx={airPollutionStyles}>
              <Typography>NH<sub>3</sub> </Typography>
              <Typography>{nh3} μg/m <sup>3</sup></Typography>
                 </Typography>

                 <Typography sx={airPollutionStyles}>
              <Typography>NO </Typography>
              <Typography>{no} μg/m <sup>3</sup></Typography>
                 </Typography>

                 <Typography sx={airPollutionStyles}>
              <Typography>NO<sub>2</sub> </Typography>
              <Typography>{no2} μg/m <sup>3</sup></Typography>
                 </Typography>

                 <Typography sx={airPollutionStyles}>
              <Typography>O<sub>3</sub> </Typography>
              <Typography>{o3} μg/m <sup>3</sup></Typography>
                 </Typography>

                 <Typography sx={airPollutionStyles}>
              <Typography>PM<sub>2.5</sub> </Typography>
              <Typography>{pm2_5} μg/m <sup>3</sup></Typography>
                 </Typography>

                 <Typography sx={airPollutionStyles}>
              <Typography>PM<sub>10</sub> </Typography>
              <Typography>{pm10} μg/m <sup>3</sup></Typography>
                 </Typography>

                 <Typography sx={airPollutionStyles}>
              <Typography>SO<sub>2</sub> </Typography>
              <Typography>{so2} μg/m <sup>3</sup></Typography>
                 </Typography>

               </Typography>
            : null}
            </div>
             </Fade>
    </>
  )
}

export default React.memo(CurrentAirPollutionItem);