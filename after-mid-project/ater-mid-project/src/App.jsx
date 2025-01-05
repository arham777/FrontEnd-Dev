// import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./Pages/HomePage/HomePage"
import ProductsPage from "./Pages/ProductsPage/ProductsPage"
import WeddingPage from "./Pages/WeddingPage/WeddingPage"
import PortraitPage from "./Pages/PortraitPage/PortraitPage"
import NaturePage from "./Pages/NaturePage/NaturePAge"
import Header from "./Components/Header/Header"

const App = () => {
  return (
    <BrowserRouter>

      <section className=" m-12" >
        <Header/>
      </section>

      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/weddings" element={<WeddingPage/>} />
        <Route path="/nature" element={<NaturePage/>} />
        <Route path="/portraits" element={<PortraitPage/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App