import { useRef } from "react";
import axios from "axios";
function App() {
  const name = useRef();
  const name2 = useRef();
  const pass = useRef();
  const pass2 = useRef();

  const SubmitHandler2 = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username: name.current.value,
        password: pass.current.value,
      });
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
    } catch (error) {
      alert(error);
    }
  };

  const SubmitHandler3 = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signup/", {
        username: name2.current.value,
        password: pass2.current.value,
      });
      console.log(response.data);
 
    } catch (error) {
      alert(error);
    }
  };

  

  return (
    <>
      <br />
      <br />
      <label htmlFor="login-username">User Name: </label>
      <input type="text" id="login-username" ref={name} />
      <br />
      <br />
      <label htmlFor="login-password">Password: </label>
      <input type="password" id="login-password" ref={pass} />
      <br />
      <br />
      <button onClick={SubmitHandler2}>Login</button>

   


      <br />
      <br />
      <h1>SIGN-UP FORM</h1>
      <label htmlFor="signup-username">User Name: </label>
      <input type="text" id="signup-username" ref={name2} />
      <br />
      <br />
      <label htmlFor="signup-password">Password: </label>
      <input type="password" id="signup-password" ref={pass2} />
      <br />
      <br />
      <button onClick={SubmitHandler3}>Sign Up</button>
    </>
  );
}

export default App;
