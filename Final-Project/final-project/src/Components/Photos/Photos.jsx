import React from 'react'

const Photos = (props) => {
  return (
    <div>
      <img className='w-72 h-80 border rounded-3xl object-cover cursor-pointer hover:shadow-md hover:shadow-white hover:scale-105 transition duration-300 ease-in-out' src={props.img} alt="" />
    </div>
  )
}

export default Photos