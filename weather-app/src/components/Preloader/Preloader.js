import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

 function  Preloader () {
  return (
    <Box sx={{ display: 'flex', justifyContent: "center", alignItems:"center", padding:"1rem" }}>
      <CircularProgress />
    </Box>
  );
}

export default Preloader; 