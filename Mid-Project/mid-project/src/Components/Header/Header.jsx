// import React from 'react'
import logo from '../../assets/logo.png';
import NavTag from "../NavTag/NavTag";
import { useState } from 'react';

const Header = () => {
    const [selectedTopic, setSelectedTopic] =useState();

    const xyz= (abc) =>{
      setSelectedTopic(abc);
      console.log(abc);
    }

  return (
    <div className='flex items-center justify-between space-x-4 p-4 font-bold'>
        <div className='w-8 '>
          <img src={logo} alt="" />
        </div>

        <div className="flex justify-end space-x-4 font-bold ">
          <NavTag
            isSelected={selectedTopic === 'portfolio'}
            select={ ()=> { xyz('portfolio') } }
          >
            Portfolio
          </NavTag>
          <NavTag
            isSelected={selectedTopic === 'shop'}
            select={ ()=>{ xyz('shop')} }
          >
            Shop
          </NavTag>

          <NavTag
            isSelected={selectedTopic === 'contact'}
            select={ ()=> { xyz('contact')} }
          >
            Contact
          </NavTag>
        </div>


    </div>
  )
}

export default Header