import { Routes, BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div>
      <h1>hi</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App