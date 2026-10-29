import React from 'react'


const NavTag = ({  image }) => {
  // children, isSelected, select,
  return (
    <div className=''>
        {image && <img src={image} alt="" className="w-8 h-8" />}
   
      {/* <section>
        <p
          className={` cursor-pointer hover:text-violet-500 duration-200 active:text-violet-700 transition ease-in-out ${
            isSelected ? 'text-violet-700' : null
          }`}
          onClick={select}
        >
          {children}
        </p>
      </section> */}


    </div>
  )
}

export default NavTag;