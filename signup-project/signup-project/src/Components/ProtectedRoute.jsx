import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';

const ProtectedRoute = ({children}) => {

  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(
    ()=>{

      const token=localStorage.getItem("access");
      if (token) {
        const {exp} = jwtDecode(token)
        console.log(exp);
        // if (exp*1000  < )
        setIsAuthenticated(true);
        // console.log(true);
      }else {
        setIsAuthenticated(false);
        console.log("token not found")
      }
    }, []
  );

  const refreshAccess= async()=> {
    try{
        const response= axios.post()
    }
    catch(error){
      alert(error)
    }
  }


  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isAuthenticated ? children : <Navigate to={'/login'} />}
    </div>
  )
}

export default ProtectedRoute