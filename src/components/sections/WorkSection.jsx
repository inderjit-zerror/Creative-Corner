"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const videoData = [
  `/Video/video1.mp4`,
  `/Video/video2.mp4`,
  `/Video/video3.mp4`,
  `/Video/video4.mp4`,
];

const WorkSection = () => {


  useEffect(()=>{
    const PLT1 = gsap.timeline({
      scrollTrigger:{
        trigger:'.WorkCONTDIV',
        start:'top top',
        end:'top top',
        scrub:true
      }
    })
    PLT1.to('.ExpertiseLine',{
      width:'0%'
    })
    PLT1.to('.WorkLine',{
      width:'100%'
    })

    const PLTE = gsap.timeline({
      scrollTrigger:{
        trigger:'.WorkCONTDIV',
        start:'bottom top',
        end:'bottom top',
        scrub:true
      }
    })
    PLTE.to('.WorkLine',{
      width:'0%'
    })
  },[])
  return (
    <div
    id="work"
      className={` w-full h-fit WorkCONTDIV relative flex flex-col justify-center items-center bg-[#202020] pb-[10vh]`}
    >
      <div className="w-full h-fit flex justify-center Font_Main items-center sticky top-0 left-0 mix-blend-difference py-10 z-50">
        <h1 className="text-[5vw] leading-[5vw] max-sm:text-[10vw] max-sm:leading-[10vw]  text-white">[ WORK. ]</h1>
      </div>
      

      {videoData.map((item, index) => {
        return (
          <div key={index} className="w-1/3 max-sm:w-[95%] h-fit flex flex-col mt-10">
            <div className="w-full h-svh  relative z-40 overflow-hidden">
              <video
                src={item}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover object-center"
              />
            </div>
            <p className="text-white Font_Main text-[1.7vw] leading-[1.7vw] max-sm:text-[1.5rem] max-sm:leading-[1.5rem] pt-5 pb-2">
              Project ~ {index + 1}
            </p>
            <p className="text-white/60 Font_Sec text-[1vw] leading-[1vw] max-sm:text-[1rem] max-sm:leading-[1rem] pb-5 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkSection;
