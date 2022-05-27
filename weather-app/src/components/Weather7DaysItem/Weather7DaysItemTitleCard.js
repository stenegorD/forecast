import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function Weather7DaysItemTitleCard() {
    const titleCardStyles = {
        flexBasis:"20%", 
        borderRight:"1px dotted #CFCFCF"
    }
  return (
    
        <Card sx={{ 
          width: "100%",
          display:"flex",
          justifyContent: "space-between",
          gap: "30px",
          backgroundColor: "#000000",
          color: "#CFCFCF",
          opacity: "0.5",
          marginBottom: "5px",
          padding:"5px 0px 5px 0px",
          '@media screen and (max-width: 479px)': {
            display:"none"
          }
          }}>
             
            <Typography sx={{...titleCardStyles, paddingLeft: "1rem"}}>Weekday</Typography>
            <Typography sx={{flexBasis:"10%", borderRight:"1px dotted #CFCFCF", textAlign:"center"}}>Icons</Typography>
            <Typography sx={titleCardStyles}>Description</Typography>
            <Typography sx={titleCardStyles}>temp Day</Typography>
            <Typography sx={titleCardStyles}>temp Night</Typography>
            <Typography sx={titleCardStyles}>Humidity</Typography>
            <Typography sx={titleCardStyles}>Pressure</Typography>
            <Typography sx={{flexBasis:"20%", }}>UVI</Typography> 
        </Card>   
  )
}

export default React.memo(Weather7DaysItemTitleCard);