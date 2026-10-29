import React from 'react'

function Background() {
  return (
    <>
    <div className=' fixed z-[2] w-full h-screen' >
      <div className='absolute top-10 w-full flex justify-center py-10 text-zinc-600 font-semibold text-lg ' >
        Documents.</div>
      <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-[-.035em] font-semibold text-zinc-900 ' >Docs.</h1>
    </div>
    </>
  )
}

export default Background