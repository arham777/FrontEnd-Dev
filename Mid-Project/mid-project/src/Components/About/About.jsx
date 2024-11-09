import React from 'react'

const About = (props) => {
  return (
    <div className="flex flex-wrap justify-center p-8 gap-12" >
      {/* <h1>PORTFOLIO</h1> */}
      <div className='lg:w-1/2'>
        <h1 className='text-xl md:text-3xl text-white font-bold '>{props.title}</h1>
        <p className=' italic md:text-sm text-sm text-gray-100 ' >{props.para}</p>
      </div>
      <div className='w-64 ' >
        <img className='rounded-3xl ' src={props.img} />
      </div>
    </div>
  )
}

export default About