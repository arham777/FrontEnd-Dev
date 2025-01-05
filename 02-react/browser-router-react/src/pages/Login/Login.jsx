import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h1>
        Login is loaded
      </h1>

      <Link to={'/'} >
          <h4>Go back to Home page</h4>
      </Link>
    </div>

    
  )
}

export default Login