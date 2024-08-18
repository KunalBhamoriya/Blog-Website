import React, { useState } from 'react';
import {Box, TextField, Typography, Button} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Registerpage = () => {

    const navigate = useNavigate();

    const [inputs , setInputs] = useState({
      name: "",
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
        const {data} = await axios.post("api/v1/user/register",{
          usename: inputs.name,
          email: inputs.email,
          password: inputs.password,
        });
        if(data.success){
          navigate("/login");
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
          
          <Typography variant='h3' textAlign='center' padding={3}>
            Register
          </Typography>
          <TextField name='name' value={inputs.name} onChange={handleChange} type='text' placeholder='name' required margin='normal'/>
          <TextField name='email' value={inputs.email} onChange={handleChange} type='email' placeholder='email' margin='normal' required />
          <TextField name='password' value={inputs.password} onChange={handleChange} type='password' placeholder='password' margin='normal' required />

          <Button
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            color="primary">
            Submit
          </Button>
          <Button
            onClick={() => navigate("/login")}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Already Registerd ? Please Login
          </Button>
        </Box>
        
      </form>
    </>
  )
}

export default Registerpage;