import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function TitleBar({title}) {
  return (
      <Card sx={{maxWidth: "300px", marginBottom:"10px", marginTop:"10px", backgroundColor: "#000000",
      color: "#FFFFFF",
      opacity: "0.5",
      }}>
      
        <Typography sx={{paddingLeft: "1rem"}}>{title}</Typography>
        
      </Card>
    
  )
}

export default TitleBar;