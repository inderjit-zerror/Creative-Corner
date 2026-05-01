"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const orbitItems = [
  { text: "A lack of clear strategy behind your content efforts.", angle: 20 },
  { text: "Campaigns that feel forced instead of authentic.", angle: 70 },
  { text: "No clear performance insights.", angle: 120 },
  { text: "Content that looks good but fails to perform.", angle: 160 },
  { text: "Brands blending in instead of standing out online.", angle: 210 },
  { text: "Ideas without execution.", angle: 250 },
  { text: "Brands blending in instead of standing out online.", angle: 300 },
  { text: "Brands blending in instead of standing out online.", angle: 340 },
];

export default function OrbitalSection() {
  useEffect(() => {
    const PP = gsap.timeline({
      scrollTrigger: {
        trigger: ".OrbitCont",
        start: "top 80%",
        end: "top top",
        scrub: true,
        // markers:true
      },
    });
    PP.fromTo(
      ".skeler",
      {
        scale: 0,
      },
      {
        scale: 1,
        ease: "power3.out",
      },
    );
    PP.to(
      ".bgColor",
      {
        backgroundColor: "black",
      },
      "a1",
    );
    PP.to(
      ".TextColor",
      {
        color: "white",
      },
      "a1",
    );
    PP.to(
      ".BorderColor",
      {
        borderColor: "white",
      },
      "a1",
    );

    const TLO = gsap.timeline({
      scrollTrigger: {
        trigger: ".OrbitCont",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers:true
      },
    });
    TLO.to(".skeler", {
      scale: 0,
    });
  }, []);

  return (
    <div className="w-full h-[150vh] relative flex OrbitCont">
      <section className=" sticky top-0 left-0 w-full h-screen bgColor bg-[white] flex items-center justify-center overflow-hidden">
        {/* CENTER TEXT */}
        <div className="absolute text-center z-10 max-w-[420px]">
          <h1 className="text-black TextColor text-[34px] leading-[44px] font-semibold tracking-tight">
            Strategic Social Media
            <br />
            Growth for Today’s
            <br />
            Brands.
          </h1>
        </div>

        <div className="skeler w-full h-screen flex justify-center items-center">
          {/* INNER DOTTED CIRCLE */}
          <div className="absolute w-[360px] h-[360px] skeler  BorderColor rounded-full border border-dashed border-black/40"></div>

          {/* MIDDLE CIRCLE */}
          <div className="absolute w-[520px] h-[520px] skeler  BorderColor rounded-full border border-black/40"></div>

          {/* OUTER CIRCLE */}
          <div className="absolute w-[720px] h-[720px] skeler  BorderColor rounded-full border border-black/30"></div>

          {/* ORBIT ITEMS */}
          <div className="absolute w-[720px] h-[720px]">
            {orbitItems.map((item, i) => {
              const radius = 320;

              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%]"
                  style={{
                    transform: `
                  rotate(${item.angle}deg)
                  translate(${radius}px)
                  rotate(-${item.angle}deg)
                `,
                  }}
                >
                  <div className="bg-[#8B7CF6]  max-w-[200px] flex flex-wrap text-white text-[13px] px-4 py-2 rounded-md shadow-md">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
