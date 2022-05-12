import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {CgMore} from 'react-icons/cg';
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs';

function TitleBar({title, more, arrow, handleArrowClick, handleClickMore, hideWeeklyForecast}) {

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
        {more ? <CgMore size={"2em"} onClick={handleClickMore || hideWeeklyForecast} style={{marginRight: "1rem", cursor:"pointer"}} /> : null}
        {arrow ? 
        <Typography component={"div"} sx={{display:"flex"}}>
          <BsArrowLeft id='BsArrowLeft' onClick={(event)=>{handleArrowClick(event)}} size={"2em"} style={{marginRight: "1rem", cursor:"pointer"}} />
          <BsArrowRight id='BsArrowRight' onClick={(event)=>{handleArrowClick(event)}} size={"2em"} style={{marginRight: "1rem", cursor:"pointer"}} />
        </Typography>
        : null}
      </Card>
    
  )
}

export default TitleBar;