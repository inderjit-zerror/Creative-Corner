"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const content = [
  "Welcome to Creative Corner — a passionate ",
  "team of digital marketing strategists, creatives ",
  " and tech savvy experts dedicated to helping",
  " brands thrive in the ever-evolving world  of social ",
  " media and online marketing. ",
  "Founded with a vision to",
  " empower businesses with ",
  " powerful digital tools, we ",
  "blend creativity with data-driven strategies to ",
  "deliver measurable results. Whether you're a  ",
  "speak your brand's language and drive real",
  "impact. startup or a growing  enterprise, we",
  "craft customized campaigns that. "
];

const AboutUs = () => {


  return (
    <div className="w-[100vw] h-screen max-sm:h-fit justify-around items-center flex relative BGRED text-white">
      <div className="w-full h-fit flex justify-around max-sm:flex-col max-sm:px-5">
        <div className="text-[1.5vw] leading-[1.5vw] pt-[10vh] max-sm:text-[4.5vw] max-sm:leading-[5vw]">
          Hi, nice to meet you. <br /> This is the part where <br /> We talk
          about OurSelf.

          <div className="w-[3vw] h-[3vw] max-sm:w-[10vw] max-sm:h-[10vw]  mt-2 max-sm:mt-[1vh]  max-sm:mb-[5vh] overflow-hidden">
            <img src={`/img/logo/icon.png`} alt="Di" className="w-full h-full object-cover object-center" />
          </div>
        </div>

        <div className="flex flex-col relative w-fit  text-justify">
          {content.map((item, i) => {
            return (
              <div
                key={i}
                className={`w-full h-fit  text-justify  text-[2vw] leading-[2.5vw] max-sm:text-[7vw] max-sm:leading-[6vw] AboutLineDiv${i + 1} flex ${i === 4 && "pl-[18vw] max-sm:pl-[25vw]"} ${i === 5 && "pl-[18vw] max-sm:pl-[25vw]"} ${i === 6 && "pl-[18vw] max-sm:pl-[25vw]"} ${i === 7 && "pl-[18vw] max-sm:pl-[25vw]"} `}
              >
                <p className=" flex text-justify">{item}</p>
              </div>
            );
          })}
          <div className=" absolute overflow-hidden top-[10.5vw] max-sm:w-[22vw] max-sm:h-[18vw] max-sm:top-[53vw] left-0 bg-amber-300 h-[9vw] w-[8vw]">
            <img src={`/img/about/img3.jpg`} alt="Owner IMG" className="w-full h-full object-cover object-center" />
          </div>
          <div className=" absolute overflow-hidden top-[10.5vw] max-sm:w-[22vw] max-sm:h-[18vw] max-sm:top-[73vw] max-sm:left-0 left-[9vw] bg-amber-300 h-[9vw] w-[8vw]">
            <img src={`/img/about/img1.jpg`} alt="Owner IMG" className="w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
