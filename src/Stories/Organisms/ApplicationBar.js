import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';

const btnStyle = {
  color: "#1976D2",
  backgroundColor: "white",
  marginLeft: "10px",
  borderRadius: "30px",
  padding: '5px 20px',
  fontWeight: '500',
  textTransform: 'none',

  '&:hover': {
    backgroundColor: 'white',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 5px 15px'
  } 
}

export default function ApplicationBar() {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            My Dashboard
          </Typography>
          <Box>
            <Button sx={btnStyle} >Edit Dashboard</Button>
            <Button sx={btnStyle} >Export</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}