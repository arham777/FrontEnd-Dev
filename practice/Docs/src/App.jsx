import React from 'react'
import Background from './Components/Background/Background'
import Foreground from './Components/Foreground/Foreground'

function App() {
  return (
    <div className=' relative w-full h-screen bg-zinc-800 '  >
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App