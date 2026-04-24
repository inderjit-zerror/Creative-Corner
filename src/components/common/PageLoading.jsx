"use client";
import gsap from "gsap";
import { useEffect } from "react";

const PageLoading = () => {
  useEffect(() => {
    const pre = gsap.timeline();
    pre.to('.innerBlack',{
        width:'100%',
        duration:2,
        ease:'power1.inOut'
    })
    pre.to('.outerBlack',{
        width:'100%',
        height:'100vh',
        duration:1,
        borderRadius:0,
        ease:'power4.inOut',
        onComplete:()=>{
            gsap.to('.BLSCREEN',{
                opacity:0
            })
        }
        
    })
  }, []);

  return (
    <div className="w-full h-screen BLSCREEN fixed flex p-10 justify-start pointer-events-none items-end top-0 left-0 z-1000 bg-[white]">
      <div className="w-[60%] h-[4px] outerBlack overflow-hidden pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-[5px]">
        <div className="w-0 h-full innerBlack bg-[#202020]"></div>
      </div>
    </div>
  );
};

export default PageLoading;
