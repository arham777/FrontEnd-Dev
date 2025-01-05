import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate()

  function handleClick() {
    console.log('clicked')
    navigate('/about-us')
  }

  return (
    <div>

      <h1>Home Page</h1>
      <Link to={'/login'} >
        <h4>Go to login page</h4>
      </Link>
      <Link to={'/about-us'} >
        <h4>Go to About us page</h4>
      </Link>

      {/* <Link to={'/about-us'}>
        <button>Clime me to navigate to about us</button>
      </Link> */}
     
      <button onClick={handleClick} >Click me to navigate to about us</button>
      
    </div>
  )
}

export default Home