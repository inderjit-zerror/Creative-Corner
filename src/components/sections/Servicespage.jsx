"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Influencer Marketing",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img1.jpg`,
    bgC:" #FFE4E4 ",
    Txt:"#202020"
  },
  {
    number: "02",
    title: "SEO",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img2.jpg`,
    bgC:" #FFB3B3  ",
    Txt:"#202020"
  },
  {
    number: "03",
    title: "Website Development & E-Commerce",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img3.jpg`,
    bgC:"#FF8080 ",
    Txt:"#202020"
  },
  {
    number: "04",
    title: "Video Marketing",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img4.jpg`,
    bgC:" #FF4D4D ",
    Txt:"#ffffff"
  },
  {
    number: "05",
    title: "Social Media Management",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img5.jpg`,
    bgC:" #E60000",
    Txt:"#ffffff"
  },
  {
    number: "06",
    title: "Digital Marketing",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img6.jpg`,
    bgC:" #990000 ",
    Txt:"#ffffff"
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
        // if (i === 0) return; // first stays base

        if (i === 5) {
          // ST.to(card, {
          //   top: `${1 * 50}%`,
          //   ease: "none",
          // });
          ST.to(card, {
            top: `0%`,
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
    <div id="services" className="w-full ServMainCont h-[300vh] relative bg-white">
      <div className="w-full h-svh sticky top-0 left-0">
        {/* Name */}

        <div className="w-full h-[40vh]  p-5">
          <div className="w-full h-fit flex justify-center items-center  mix-blend-difference py-10 z-50">
            <h1 className="text-[5vw] leading-[5vw]  Text_Color_A">
              [ SERVICES. ]
            </h1>
          </div>
        </div>

        {/* List */}
        <div className="w-full h-[60vh]  relative flex flex-col">
          {services.map((item, index) => {
            return (
              <div
                key={index}
                // style={{ top: `${index * 50}%` }}
                style={{
  backgroundColor: item.bgC,
  color: item.Txt
}}
                className={` serviceCard w-full h-full  ${index === 0 ? "top-0" : "top-[100%]"} absolute  left-0 border-t-[1px] border-[#20202021]  flex ServDiv${index + 1}`}
              >
                <div className="w-1/4 h-full flex pr-5 py-5">
                  <p className="text-[2vw] w-[70%] leading-[2vw] ">
                    {item.number}
                  </p>
                </div>
                <div className="w-2/4 h-full flex flex-col pr-5 py-5">
                  <p className="text-[3vw] w-[70%] leading-[3vw] ">
                    {item.title}
                  </p>
                  <div className="w-fullh-full flex pr-5 py-5">
                  <p className="text-[16px] w-[70%] leading-[16px] mt-5 ">
                    {item.description}
                    {item.description}
                    {item.description}
                  </p>
                </div>
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
