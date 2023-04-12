import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';

const btnStyles = {
  color: "#1976D2",
  backgroundColor: "white",
  marginLeft: "10px",
  borderRadius: "30px",
  padding: '5px 20px',

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
          <div>
            <Button sx={btnStyles} >Edit Dashboard</Button>
            <Button sx={btnStyles} >Export</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}