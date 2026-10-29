// import React from 'react'
import logo from '../../assets/logo.png';
import NavTag from "../NavTag/NavTag";
// import { useState } from 'react';
import { Link } from 'react-router';


const Header = () => {
    // const [selectedTopic, setSelectedTopic] =useState(null);

    // const xyz= (abc) =>{
    //   setSelectedTopic(abc);
    //   console.log(abc);
    // }

  return (
    <div className='fixed top-0 z-50 left-0 right-0 flex items-center justify-center space-x-4 p-4 font-bold bg-[#0f172a]'>
          <Link to={'/'} >
            <NavTag image={logo} />
          </Link>


          {/* <section className='flex space-x-4'>
            <NavTag 
              isSelected={selectedTopic === 'portfolio'} 
              select={() => xyz('portfolio')}

              // onClick={onPortfolioClick}
            >
              Portfolio
            </NavTag>

            <NavTag 
              isSelected={selectedTopic === 'contact'} 
              select={() => xyz('contact')}
            >
              Contact
            </NavTag>

            <NavTag 
              isSelected={selectedTopic === 'shop'} 
              select={() => xyz('shop')}
            >
              Shop
            </NavTag>

          </section>
           */}


    </div>
  )
}

export default Header