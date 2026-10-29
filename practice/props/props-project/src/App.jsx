import './App.css'
import Student from './Components/Student/Student'

function App() {

  return (
    <>
      <Student name='Batman' age={21} isStudent={0}/>
      <Student name='Spiderman' age={16} isStudent={1}/>
      <Student name='Peter' age={33} isStudent={0}/>
      <Student name='Strange' age={42} isStudent={0}/>
      <Student/>
    </>
  )
}

export default App
