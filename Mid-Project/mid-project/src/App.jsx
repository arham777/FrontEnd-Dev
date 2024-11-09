// import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { MyTitle } from './Components/MyTitle/MyTitle';
import mainImg from './assets/main.jpg'
import './assets/mainBg.jpg'
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import insta from './assets/insta.png';
import fb from './assets/fb.png';
import x from './assets/x.png';
const App = () => {
  return (
    <div >
      <Header/>
      {/* <header className=' flex items-center justify-between space-x-4 p-4 font-bold' >
        <div className='w-8 '>
          <img src={logo} alt="" />
        </div>
        <ul className='flex justify-end space-x-4 font-bold '>
          {/* <li><a href="#">Portfolio</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Contact</a></li> */}
          {/* <NavTag>Portfolio</NavTag>
          <NavTag>Shop</NavTag>
          <NavTag>Contact</NavTag>
        </ul>
      </header> */}
      {/* <h1 className='text-3xl font-bold grid h-screen place-content-center'>PORTFOLIO</h1> */}
      <section className='h-screen bg-right bg-cover bg-[url("./assets/mainBg.jpg")]'>
        <MyTitle title='M. Arham Athar' para='Using my creativity to describe emotions with my lens' />
      </section>

      <section>
        <About title='About Me' img={mainImg} para='Welcome to my portfolio! I’m Muhammad Arham Athar, a passionate photographer dedicated to capturing moments that tell unique stories. With a focus on product, portrait, wedding, and nature photography, I strive to create images that blend artistry with authenticity. Whether it’s the intricate details of a product, the essence of a person in a portrait, the beauty of a wedding celebration, or the serenity of nature, I aim to bring out the best in every shot. My journey in photography is driven by a commitment to quality and creativity, and I’m excited to share my work with you. Thank you for visiting, and I look forward to connecting with you!'/>
      </section>

      <section className='pb-48 '>
        <h1 className='m-4 text-3xl font-bold' >Portfolio</h1>
        <div className='m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <Portfolio img={mainImg} category='Product' />
        <Portfolio img={mainImg} category='Wedding'  />
        <Portfolio img={mainImg} category='Nature'  />
        <Portfolio img={mainImg} category='Portraits'  />
        </div>
        
      </section>
      
      <footer className='w-full h-16 bg-[rgba(0,0,0,0.5)] flex justify-between space-x-4 align-center items-center px-8'>
        <p className='text-[0.6rem] md:text-sm text-gray-500'>Copyright &#169; 2024 Designed by Arham Athar. All rights reserved </p>
        <div className='flex space-x-4 items-center' >
          <img className='w-2.5 h-2.5 md:w-4 md:h-4' src={insta} alt="" />
          <img className='w-2.5 h-2.5 md:w-4 md:h-4' src={fb} alt="" />
          <img className='w-2.5 h-2.5 md:w-4 md:h-4' src={x} alt="" />
        </div>
        
      </footer>


    </div>
  )
}

export default App