import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CgMore} from 'react-icons/cg';

function TitleBar({title, more}) {
  return (
      <Card sx={{
        marginBottom:"1rem" ,
        marginTop:"1rem",
        backgroundColor: "#000000",
      color: "#FFFFFF",
      opacity: "0.5",
      display:"flex",
      justifyContent:"space-between",
      }}>
      
        <Typography sx={{paddingLeft: "1rem", alignSelf:"center"}}>{title}</Typography>
        {more ? <CgMore size={"2em"} style={{marginRight: "1rem", cursor:"pointer"}} /> : null}
      </Card>
    
  )
}

export default TitleBar;