import React from 'react'

const NavTag = (props) => {

  return (
    <div>
      <img src={props.children} alt="" />
   
      <section>
        <p
          className={`hover:text-gray-400 duration-200 ease-in-out active:text-gray-900 focus:text-violet-700 ${
            props.isSelected ? 'focus' : null
          }`}
          onClick={props.select}
        >
          {props.children}
        </p>
      </section>


    </div>
  )
}

export default NavTag;