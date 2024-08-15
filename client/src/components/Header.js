import React from 'react'
import {Box, AppBar, Toolbar, Typography, Tabs, Tab, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
        <Typography variant='h4'>Tech Light</Typography>
        <Box display={"flex"} marginLeft={'auto'} marginRight={'auto'} >
          <Tabs textColor='inherit'>
            <Tab label="Blogs" LinkComponent={Link} to="./blogs"/>
            <Tab label="My Blogs" LinkComponent={Link} to="./my-blogs"/>
            <Tab label="Create Blog" LinkComponent={Link} to="./create-blogs"/>
          </Tabs>
        </Box>
        <Box>
          <Button sx={{margin : 1, color : "white"}} LinkComponent={Link} to="/login">Login</Button>
          <Button sx={{margin : 1, color : "white"}} LinkComponent={Link} to="/register">Register</Button>
          <Button sx={{margin : 1, color : "white"}} >Logout</Button>
        </Box>
        </Toolbar>
      </AppBar>
    
    </>
  )
}

export default Header