'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap';

const HeroSection = () => {

  useEffect(() => {
    gsap.to('.mainHomeCont', {
    delay:4,
    opacity:1,
    duration:2,
    ease: "power1.out",
  });
  }, []);

  return (
    <div id='home' className='w-full h-svh flex overflow-hidden mainHomeCont opacity-0 justify-start items-end fixed top-0 left-0 pointer-events-none p-10 max-sm:px-5 z-[-1] '>
      <h1 className='text-[7vw] leading-[6vw] max-sm:text-[18vw] max-sm:leading-[18vw] Text_Color_A'>Creative <br /> Corner</h1>

      <div className=' absolute w-full h-fit flex justify-between items-center max-sm:top-[15%] top-1/2 left-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 px-10'>
      <p className='Text_Color_B text-[1rem]'>Creative</p>
      <p className='Text_Color_B text-[1rem]'>AGENCY</p>
      </div>

    </div>
  )
}

export default HeroSection 
