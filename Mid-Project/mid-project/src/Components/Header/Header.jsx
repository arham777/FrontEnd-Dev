// import React from 'react'
import logo from '../../assets/logo.png';
import NavTag from "../NavTag/NavTag";
import { useState } from 'react';

const Header = () => {
    const [selectedTopic, setSelectedTopic] =useState();

    const xyz= (abc) =>{
      setSelectedTopic(abc);
    }

  return (
    <div className='flex items-center justify-between space-x-4 p-4 font-bold'>
        <div className='w-8 '>
          <img src={logo} alt="" />
        </div>

        {/* <ul className='flex justify-end space-x-4 font-bold '>
          <NavTag key='portfolio' isSelected={selectedTopic==='portfolio'} select{()={xyz('portfolio')} } >Portfolio</NavTag>
          <NavTag key='shop' isSelected={selectedTopic==='shop'} select{()={xyz('shop')} } >Shop</NavTag>
          <NavTag key='contact' isSelected={selectedTopic==='contact'} select {()={xyz('contact')} }>Contact</NavTag>
        </ul> */}

<ul className="flex justify-end space-x-4 font-bold">
  <NavTag
    key="portfolio"
    isSelected={selectedTopic === 'portfolio'}
    select={() => setSelectedTopic('portfolio')}
  >
    Portfolio
  </NavTag>
  <NavTag
    key="shop"
    isSelected={selectedTopic === 'shop'}
    select={() => setSelectedTopic('shop')}
  >
    Shop
  </NavTag>
  <NavTag
    key="contact"
    isSelected={selectedTopic === 'contact'}
    select={() => setSelectedTopic('contact')}
  >
    Contact
  </NavTag>
</ul>


    </div>
  )
}

export default Header