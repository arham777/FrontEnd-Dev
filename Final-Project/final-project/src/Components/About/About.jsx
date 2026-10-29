import React from 'react'

const About = (props) => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between items-start md:space-x-4 space-y-8 md:space-y-4 lg:space-y-0 p-8" >
      {/* <h1>PORTFOLIO</h1> */}
      <div className='lg:w-1/2'>
        <h1 className='text-xl md:text-3xl text-white font-bold pb-4 ml-2'>{props.title}</h1>
        <p className=' italic md:text-lg text-sm text-justify text-gray-100 ml-8 ' >{props.para}</p>
      </div>
      <div className='w-64 ' >
        <img className='rounded-3xl ' src={props.img} />
      </div>
    </div>
  )
}

export default About