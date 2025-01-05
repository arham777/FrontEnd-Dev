import React from 'react'
import prod from '../../assets/prod.jpeg'
import prod2 from '../../assets/prod2.jpeg'
import Photos from '../../Components/Photos/Photos'
import Header from '../../Components/Header/Header'

const ProductsPage = () => {
  return (
    <>

      {/* <section>
        <Header />
      </section> */}

      <div className='flex justify-center ' >
        <h1 className=' py-8 font-bold text-md sm:text-2xl md:text-4xl font-[Roboto]'>Here are some product commerial photography</h1>
      </div>
      
      <div className='flex flex-wrap items-center justify-center gap-16 my-12'>
        <Photos img={prod} />
        <Photos img={prod2} />
        <Photos img={prod} />
        <Photos img={prod2} />
        <Photos img={prod} />
        <Photos img={prod2} />
        <Photos img={prod} />
        <Photos img={prod2} />
        {/* <img className='w-72 h-80 border rounded-3xl object-cover' src={prod} alt="" />
        <img className='w-72 h-80 border rounded-3xl  object-cover' src={prod} alt="" />
        <img className='w-72 h-80 border rounded-3xl object-cover' src={prod} alt="" />
        <img className='w-72 h-80 border rounded-3xl object-cover' src={prod} alt="" /> */}
      </div>
    </>
  )
}

export default ProductsPage