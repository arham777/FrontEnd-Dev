import React from 'react'

const Portfolio = (props) => {
  return (
    <div className='m-4 relative cursor-pointer'>
      <img className='rounded-xl' src={props.img} alt="" />
      <p className='absolute bottom-1/2 left-1/2 translate-x-[-50%] translate-y-[50%] bg-slate-500/50 w-full text-center py-4 text-2xl text-white font-bold' >{props.category}</p>
    </div>
  )
}

export default Portfolio