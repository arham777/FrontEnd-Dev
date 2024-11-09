// import React from 'react'

const NavTag = (props) => {
  return (
    <div>
      <img src={props.children} alt="" />
      {/* <li><a className="hover:text-gray-400 duration-200 ease-in-out active:text-gray-600" {props.isSelected ? 'active' : null  } href="#">{props.children}</a></li> */}

      
      <li>
        <a
          className={`hover:text-gray-400 duration-200 ease-in-out active:text-gray-400 focus:text-violet-700 ${
            props.isSelected ? 'active' : null
          }`}
          href="#"
        >
          {props.children}
        </a>
      </li>


    </div>
  )
}

export default NavTag;