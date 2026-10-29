import React from 'react'
import {Route, BrowserRouter , Routes} from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Navigation from './Components/Navigation'
import ProtectedRoute from './Components/ProtectedRoute'

const App = () => {
  return (


    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={
           <ProtectedRoute >
             <Home/>
           </ProtectedRoute>
        } />
       
       <Route path="/signin" element={<SignIn/>} />
       <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App