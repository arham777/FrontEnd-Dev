import React from 'react'
import {useRef } from 'react'
import axios from 'axios';
import { Navigate , useNavigate } from 'react-router-dom';


const SignIn = () => {
  const nameIn = useRef();
  const passIn = useRef();
  const navigate= useNavigate();
  
  const handleSignin = async() => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signin/",
        {
          username: nameIn.current.value,
          password: passIn.current.value,
        }
      );

      localStorage.setItem("refresh", response.data.refresh);
      localStorage.setItem("access", response.data.access);
      console.log('ok');

      navigate('/')
    }catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      
      <h1>Sign-In Page</h1>
      <label htmlFor="login-username" >Username: </label>
      <input type="text" id='login-username' ref={nameIn} />
      <br />
      <br />
      <label htmlFor="login-password">Password: </label>
      <input type="password" id='login-password' ref={passIn} />
      <br />
      <br />
      <button onClick={handleSignin} >Signin</button>

    </div>
  )
}

export default SignIn