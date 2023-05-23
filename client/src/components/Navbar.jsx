import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../index.css';
const Navbar = () => {
  return (
    <>
            <Box  style={{}} sx={{ flexGrow: 1 }}>
      <AppBar className='appbar' position="static">
        <Toolbar> 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Robotics
          </Typography>
          <Button style={{marginRight:"10px"}} color="inherit"> <Link style={{textDecoration:"none",color:"white"}} to='/'>Home</Link> </Button>
          <Button color="inherit"> <Link style={{textDecoration:"none",color:"white"}} to='/add'>Add </Link> </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar