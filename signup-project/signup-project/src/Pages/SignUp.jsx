import React, { useRef } from 'react'
import axios from 'axios';

const SignUp = () => {

  const nameUp = useRef();
  const passUp = useRef();

  const handleSignUp = async() => {
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/signup/',
        {
          username: nameUp.current.value,
          password: passUp.current.value,
        }
      );
      console.log(response.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <label htmlFor="signup-username">Username: </label>
      <input type="text" id='signup-username' ref={nameUp} />
      <br />
      <br />
      <label htmlFor="signup-password">Password: </label>
      <input type="password" id='signup-password' ref={passUp} />
      <br />
      <br />
      <button onClick={handleSignUp} >Signup</button>

    </div>
  )
}

export default SignUp