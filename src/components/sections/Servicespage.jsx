"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Influencer Marketing",
    description: "We create engaging brand and campaign identities...",
    capsules: [
      "Campaign Strategy",
      "Creator Outreach",
      "Analytics",
      "Brand Deals",
    ],
    image: `/img/about/img1.jpg`,
    bgC: "#FFF5F5",
    Txt: "#202020",
  },
  {
    number: "02",
    title: "Search Engine Optimization",
    description: "We create engaging brand and campaign identities...",
    capsules: ["On-Page SEO", "Technical SEO", "Backlinks", "Keyword Research"],
    image: `/img/about/img2.jpg`,
    bgC: "#FFE0E0",
    Txt: "#202020",
  },
  {
    number: "03",
    title: "Website Development & E-Commerce",
    description: "We create engaging brand and campaign identities...",
    capsules: ["UI/UX", "Frontend", "Backend", "Shopify", "Performance"],
    image: `/img/about/img3.jpg`,
    bgC: "#FFCCCC",
    Txt: "#202020",
  },
  {
    number: "04",
    title: "Video Marketing",
    description: "We create engaging brand and campaign identities...",
    capsules: ["Editing", "Storyboarding", "Ads", "Reels", "YouTube"],
    image: `/img/about/img4.jpg`,
    bgC: "#FF9999",
    Txt: "#202020",
  },
  {
    number: "05",
    title: "Social Media Management",
    description: "We create engaging brand and campaign identities...",
    capsules: ["Content Plan", "Scheduling", "Engagement", "Insights"],
    image: `/img/about/img5.jpg`,
    bgC: "#FF4D4D",
    Txt: "#ffffff",
  },
  {
    number: "06",
    title: "Digital Marketing",
    description: "We create engaging brand and campaign identities...",
    capsules: ["Ads", "Funnels", "Email", "Automation", "Growth"],
    image: `/img/about/img6.jpg`,
    bgC: "#FF0000",
    Txt: "#ffffff",
  },
];

const Servicespage = () => {
  const headingRef = useRef();
  const HEADING_TEXT = "[ expertise. ]";

  useEffect(()=>{
    const PLT1 = gsap.timeline({
      scrollTrigger:{
        trigger:'.ServMainCont',
        start:'top top',
        end:'top top',
        scrub:true
      }
    })
    PLT1.to('.AboutLine',{
      width:'0%'
    })
    PLT1.to('.ExpertiseLine',{
      width:'100%'
    })
  },[])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Text Reveal Animation ──────────────────────────────────────
      const chars = headingRef.current?.querySelectorAll(".char");

      if (chars && chars.length > 0) {
        gsap.fromTo(
          chars,
          {
            yPercent: 110,
            opacity: 0,
            rotateX: -60,
          },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.04,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
              scrub: true,
            },
          },
        );
      }

      // ── Stacking Cards Animation ───────────────────────────────────
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
        ST.to(card, {
          top: "0%",
          ease: "none",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="services"
      className="w-full ServMainCont h-[300vh] relative bg-white"
    >
      <div className="w-full h-svh sticky top-0 left-0">
        {/* Heading */}
        <div className="w-full h-[40vh] max-sm:h-[20vh] flex justify-center items-center p-5">
          <div className="w-full h-fit flex justify-center items-center mix-blend-difference py-10 max-sm:pt-[8vh] z-50">
            <h1
              ref={headingRef}
              className="text-[5vw] uppercase leading-[5vw] sm:text-[5vw] sm:leading-[5vw] text-[10vw] leading-[10vw] Text_Color_A flex overflow-hidden flex-wrap justify-center"
              style={{ perspective: "600px" }}
            >
              {HEADING_TEXT.split("").map((char, i) => (
                <span
                  key={i}
                  className="char inline-block"
                  style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>
        </div>

        {/* Cards */}
        <div className="w-full h-[60vh] max-sm:h-[80vh] relative flex flex-col">
          {services.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: item.bgC,
                color: item.Txt,
                top: index === 0 ? "0%" : "100%",
              }}
              className="serviceCard w-full h-full absolute left-0 border-t border-[#20202021] flex flex-col sm:flex-row"
            >
              {/* ── Mobile Layout ── */}
              <div className="flex sm:hidden w-full h-full max-sm:gap-[5vh] flex-col p-4 gap-2 overflow-hidden">
                {/* Top row: number + title */}
                <div className="flex items-start gap-3">
                  <span
                    className="text-[5vw] leading-tight font-light shrink-0"
                    style={{ color: item.Txt }}
                  >
                    {item.number}
                  </span>
                  <p
                    className="text-[8vw] leading-tight font-medium"
                    style={{ color: item.Txt }}
                  >
                    {item.title}
                  </p>
                </div>

                {/* Description */}
                <p
                  className="text-[1rem] leading-relaxed opacity-80 line-clamp-3"
                  style={{ color: item.Txt }}
                >
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.capsules.map((cap, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs border rounded-full"
                      style={{
                        borderColor: item.Txt,
                        color: item.Txt,
                      }}
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Image — bottom strip on mobile */}
                <div className="w-full flex-1 min-h-0 overflow-hidden rounded-sm mt-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* ── Desktop Layout ── */}
              <div className="hidden sm:flex w-full h-full p-10">
                {/* Number */}
                <div className="w-1/4 h-full flex ">
                  <p className="text-[2vw] w-[70%] leading-[2vw]">
                    {item.number}
                  </p>
                </div>

                {/* Title + Description */}
                <div className="w-2/4 h-full flex flex-col ">
                  <p className="text-[3vw] w-[70%] leading-[3vw]">
                    {item.title}
                  </p>
                  <div className="w-full flex pr-5 py-5">
                    <p className="text-[16px] w-[70%] leading-relaxed mt-5">
                      {item.description}
                      {item.description}
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 w-[70%]">
                    {item.capsules.map((cap, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm border rounded-full"
                        style={{
                          borderColor: item.Txt,
                          color: item.Txt,
                        }}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="w-1/4 h-full flex overflow-hidden ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicespage;
