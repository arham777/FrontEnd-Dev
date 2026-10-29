import React from 'react'
import Header from '../../Components/Header/Header'
import Photos from '../../Components/Photos/Photos'
import wed from '../../assets/wed.jpg'

const WeddingPage = () => {
  return (
    <>

      {/* <section>
        <Header/>
      </section> */}

      <div className='flex justify-center ' >
        <h1 className=' py-8 font-bold text-md sm:text-2xl md:text-4xl font-[Roboto]'>Here are some Wedding photography</h1>
      </div>
      
      <div className='flex flex-wrap items-center justify-center gap-16 my-12'>
        <Photos img={wed} />
        <Photos img={wed} />
        <Photos img={wed} />
        <Photos img={wed} />
        <Photos img={wed} />
        <Photos img={wed} />
        <Photos img={wed} />
        <Photos img={wed} />
        <Photos img={wed} />
        
        
        
      </div>
    </>
  )
}

export default WeddingPage