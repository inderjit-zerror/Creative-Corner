"use client";
import gsap from "gsap";
import { useEffect } from "react";

const PageLoading = () => {
  useEffect(() => {
    const pre = gsap.timeline();

     pre.to(".T_RAp", {
      opacity:"1",
      duration: 1,
      ease: "power3.inOut",
    });
    pre.to(".T_RAp", {
      y: "-24px",
      duration: 1,
      ease: "power3.inOut",
    });
    pre.to(".T_RAp", {
      y: "-48px",
      duration: 1,
      ease: "power3.inOut",
    });
    pre.to(".T_RAp", {
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.to(".BLSCREEN", {
          opacity: 0,
        });
      },
    });
  }, []);

  return (
    <div className="w-full h-screen BLSCREEN fixed flex p-10 justify-center pointer-events-none items-center top-0 left-0 z-1000 bg-[white]">
      <div className="w-full h-[1.5rem] leading-[1.5rem] flex flex-col overflow-hidden items-center ">
        <div className="w-full h-fit flex flex-col items-center T_RAp opacity-0">
          <h1 className="text-[1.4rem] Text_Color_A font-semibold flex  T1">
            Hi
          </h1>
          <h1 className="text-[1.4rem] Text_Color_B font-semibold  flex uppercase T2">
            WE Are
          </h1>
          <h1 className="text-[1.4rem] Text_Color_A font-semibold flex  uppercase T3">
            Creative Corner !
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageLoading;
