import React from 'react'
import Header from '../../Components/Header/Header'
import Photos from '../../Components/Photos/Photos'
import port from '../../assets/port.jpeg'

const PortraitPage = () => {
  return (
    <>

      {/* <section>
        <Header/>
      </section> */}

      <div className='flex justify-center ' >
        <h1 className=' py-8 font-bold text-md sm:text-2xl md:text-4xl font-[Roboto]'>Here are some Portrait photography</h1>
      </div>
      
      <div className='flex flex-wrap items-center justify-center gap-16 my-12'>
        <Photos img={port} />
        <Photos img={port} />
        <Photos img={port} />
        <Photos img={port} />
        <Photos img={port} />
        <Photos img={port} />
        <Photos img={port} />
        <Photos img={port} />
        {/* <img className='w-72 h-80 border rounded-3xl object-cover' src={prod} alt="" />
        <img className='w-72 h-80 border rounded-3xl  object-cover' src={prod} alt="" />
        <img className='w-72 h-80 border rounded-3xl object-cover' src={prod} alt="" />
        <img className='w-72 h-80 border rounded-3xl object-cover' src={prod} alt="" /> */}
      </div>
    </>
  )
}

export default PortraitPage