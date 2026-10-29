// import React from 'react'

export const MyTitle = (props) => {
  return (
    <div className=" relative" >
      <div className='absolute top-48 left-20 hover:animate-pulse'>
        <h1 className='text-4xl md:text-6xl text-gray-800 font-bold'>{props.title}</h1>
        <p className='italic md:text-lg text-md pr-12 text-gray-800 ' >{props.para}</p>
      </div>
      
    </div>
  )
}
