import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Login from './pages/Login/Login'
import ErrorScreen from './pages/ErrorScreen/ErrorScreen'
import ClientPage from './pages/Client/ClientPage'


const App = () => {
  return (

    <BrowserRouter>

        <h1 style={{backgroundColor: 'red'}}>This is navbar</h1>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/*' element={<ErrorScreen/>} />
        <Route path='/client/:id/:name' element={<ClientPage/>} />

      </Routes>

        <h1 style={{backgroundColor: 'blue'}}>This is Footer</h1>

    </BrowserRouter>
    
  )
}

export default App