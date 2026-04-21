import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-full h-svh flex overflow-hidden justify-start items-end fixed top-0 left-0 pointer-events-none p-10 '>
      <h1 className='text-[7vw] leading-[6vw] text-white'>Creative <br /> Corner</h1>

      <div className=' absolute w-full h-fit flex justify-between items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10'>
      <p className='text-white text-[1rem]'>Creative</p>
      <p className='text-white text-[1rem]'>AGENCY</p>
      </div>

    </div>
  )
}

export default HeroSection 
