"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Brand",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img1.jpg`,
  },
  {
    number: "02",
    title: "Brand",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img2.jpg`,
  },
  {
    number: "03",
    title: "Brand",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img3.jpg`,
  },
  {
    number: "04",
    title: "Brand",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img4.jpg`,
  },
  {
    number: "05",
    title: "Brand",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img5.jpg`,
  },
  {
    number: "06",
    title: "Brand",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img6.jpg`,
  },
];

const Servicespage = () => {
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".serviceCard");

      const ST = gsap.timeline({
        scrollTrigger: {
          trigger: ".ServMainCont",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      cards.forEach((card, i) => {
        if (i === 0) return; // first stays base

        if (i === 5) {
          ST.to(card, {
            top: `${1 * 50}%`,
            ease: "none",
          });
        } else {
          ST.to(card, {
            top: "0%",
            ease: "none",
          });
        }
      });
    });

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className="w-full ServMainCont h-[300vh] relative bg-white">
      <div className="w-full h-svh sticky top-0 left-0">
        {/* Name */}
        <div className="w-full h-[30vh]  p-5">
          <h1 className="text-[#202020] font-semibold text-[10vw] leading-[10vw]">
            SERVICES
          </h1>
        </div>

        {/* List */}
        <div className="w-full h-[70vh]  relative flex flex-col">
          {services.map((item, index) => {
            return (
              <div
                key={index}
                style={{ top: `${index * 50}%` }}
                className={` serviceCard w-full h-1/2 bg-white absolute top-0 left-0 border-t-[1px] border-[#20202021]  flex ServDiv${index + 1}`}
              >
                <div className="w-1/4 h-full flex pr-5 py-5">
                  <p className="text-[2vw] w-[70%] leading-[2vw] text-[#202020]">
                    {item.number}
                  </p>
                </div>
                <div className="w-1/4 h-full flex pr-5 py-5">
                  <p className="text-[3vw] w-[70%] leading-[3vw] text-[#202020]">
                    {item.title}
                  </p>
                </div>
                <div className="w-2/4 h-full flex pr-5 py-5">
                  <p className="text-[16px] w-[70%] leading-[16px] text-[#202020]">
                    {item.description}
                  </p>
                </div>
                <div className="w-1/4 h-full flex overflow-hidden  p-[5px]">
                  <img
                    src={item.image}
                    alt="Img"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Servicespage;
