import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import HomePage from "./Pages/HomePage/HomePage"
import ProductsPage from "./Pages/ProductsPage/ProductsPage"
import WeddingPage from "./Pages/WeddingPage/WeddingPage"
import PortraitPage from "./Pages/PortraitPage/PortraitPage"
import NaturePage from "./Pages/NaturePage/NaturePage"
import Header from "./Components/Header/Header"
import ContactPage from "./Pages/ContactPage/ContactPage"

const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/weddings" element={<WeddingPage />} />
        <Route path="/nature" element={<NaturePage />} />
        <Route path="/portraits" element={<PortraitPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  )
}

export default App