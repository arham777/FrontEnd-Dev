// import React from 'react'

export const MyTitle = (props) => {
  return (
    <div className=" relative" >
      {/* <h1>PORTFOLIO</h1> */}
      <div className='absolute top-48 left-20 hover:animate-pulse'>
        <h1 className='text-4xl md:text-6xl text-gray-800 font-bold'>{props.title}</h1>
        <p className='italic md:text-lg text-md pr-12 text-gray-800' >{props.para}</p>
      </div>
      {/* <div className='w-64 ' >
        <img className='rounded-3xl ' src={props.img} />
      </div> */}
    </div>
  )
}
