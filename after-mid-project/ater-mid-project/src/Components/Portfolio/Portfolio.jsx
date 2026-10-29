import React from 'react'

const Portfolio = ({category,img}) => {
  return (
    <div className='m-4 relative cursor-pointer hover:scale-105 transition duration-300 ease-in-out w-64 h-96'>
      <img className='rounded-xl w-full h-full object-cover' src={img} alt="" />
      <p className='absolute bottom-1/2 left-1/2 translate-x-[-50%] translate-y-[50%] bg-slate-500/50 w-full text-center py-4 text-2xl text-black font-bold ' >{category}</p>
    </div>
  )
}

export default Portfolio