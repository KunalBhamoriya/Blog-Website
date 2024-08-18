import {React, useState} from 'react';
import axios from "axios";
import {Box, TextField, Typography, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';


const Loginpage = () => {

  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevstate) => ({
      ...prevstate,
      [e.target.name] : [e.target.value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.post("api/v1/user/login",{
        email: inputs.email,
        password: inputs.password,
      });
      if(data.success){
        localStorage.setItem("userId", data?.user._id);
        navigate("/");
      }
    } catch(error){
      console.log(error);
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box maxWidth={450}
            display={'flex'}
            flexDirection={'column'} 
            alignItems={'center'} 
            justifyContent={'center'}
            margin='auto'
            marginTop={10}
            boxShadow="10 10 20 #ccc" 
            borderRadius={5}
            padding={3}
            sx={{border: '2px dashed grey'}}>
          
          <Typography variant='h3' textAlign={'center'} padding={3}>
            Login
          </Typography>
          <TextField name='email' placeholder='email' value={inputs.email} onChange={handleChange} margin='normal' required/>
          <TextField name='password' type='passwoed' placeholder='password' value={inputs.password} onChange={handleChange} margin='normal' required/>
          <Button
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            color="primary">
            Submit
          </Button>
          <Button
            onClick={() => navigate("/Register")}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Not a user ? Please Register
          </Button>
        </Box>
        
      </form>
    </>
  )
}

export default Loginpage
