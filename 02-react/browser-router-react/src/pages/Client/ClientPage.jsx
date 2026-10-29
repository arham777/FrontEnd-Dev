import React from 'react'
import { Link, useParams, useNavigate , Navigate } from 'react-router-dom'


const ClientPage = () => {
    const navigate = useNavigate();
    let {id, name} = useParams();

    function handleNavigate() {
      // navigate('/login')
      if(id==2) {
        navigate('/login')
      }

    }

    console.log(id)
  return (
    <div>
      <h1>
        This is Client Page
      </h1>

      <h2>
        Name: {name}
      </h2>

      <h2>
        id: {id}
      </h2>

      {/* {id==2? handleNavigate: null} */}
      {/* {id==2? <Navigate to="/login" />: null} conditional routing */}
      {id==2 && <Navigate to="/login" />} {/*conditional routing*/}


      {/* <button onClick={handleNavigate}>
        Check id
      </button> */}

      <Link to="/login">
          <button>
            click me to navigate to login
          </button>
      </Link>
      

      <Link to={'/'} >
          <h4>Go back to Home page</h4>
      </Link>
    </div>
  )
}

export default ClientPage