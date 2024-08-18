import React, { useState } from 'react'
import {Box, AppBar, Toolbar, Typography, Tabs, Tab, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();
  let isLogin = localStorage.getItem("userId");

  const [value, setValue] = useState();

  const handleLogout = async () => {
    try{
      navigate('/login');
      localStorage.clear();
    }catch(error){
      console.log(error);
    }

  }


  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
        <Typography variant='h4'>Tech Light</Typography>
        <Box display={"flex"} marginLeft={'auto'} marginRight={'auto'} >
          <Tabs textColor='inherit' value={value} onChange={(e,val) => setValue(val)}>
            <Tab label="Blogs" LinkComponent={Link} to="./blogs"/>
            <Tab label="My Blogs" LinkComponent={Link} to="./my-blogs"/>
            <Tab label="Create Blog" LinkComponent={Link} to="./create-blogs"/>
          </Tabs>
        </Box>
        <Box>
          { !isLogin && (<> 
              <Button sx={{margin : 1, color : "white"}} LinkComponent={Link} to="/login">Login</Button>
              <Button sx={{margin : 1, color : "white"}} LinkComponent={Link} to="/register">Register</Button> 
          </>)}
          {isLogin && (<Button onClick={handleLogout} sx={{margin : 1, color : "white"}} >Logout</Button>)}
        </Box>
        </Toolbar>
      </AppBar>
    
    </>
  )
}

export default Header