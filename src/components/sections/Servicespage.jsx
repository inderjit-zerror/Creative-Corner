// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { reference } from "three/src/nodes/accessors/ReferenceNode";

// gsap.registerPlugin(ScrollTrigger);

// const services = [
//   {
//     number: "01",
//     title: "Influencer Marketing",
//     description:
//       "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
//     image: `/img/about/img1.jpg`,
//     bgC: " #FFE4E4 ",
//     Txt: "#202020",
//   },
//   {
//     number: "02",
//     title: "SEO",
//     description:
//       "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
//     image: `/img/about/img2.jpg`,
//     bgC: " #FFB3B3  ",
//     Txt: "#202020",
//   },
//   {
//     number: "03",
//     title: "Website Development & E-Commerce",
//     description:
//       "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
//     image: `/img/about/img3.jpg`,
//     bgC: "#FF8080 ",
//     Txt: "#202020",
//   },
//   {
//     number: "04",
//     title: "Video Marketing",
//     description:
//       "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
//     image: `/img/about/img4.jpg`,
//     bgC: " #FF4D4D ",
//     Txt: "#ffffff",
//   },
//   {
//     number: "05",
//     title: "Social Media Management",
//     description:
//       "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
//     image: `/img/about/img5.jpg`,
//     bgC: " #E60000",
//     Txt: "#ffffff",
//   },
//   {
//     number: "06",
//     title: "Digital Marketing",
//     description:
//       "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
//     image: `/img/about/img6.jpg`,
//     bgC: " #990000 ",
//     Txt: "#ffffff",
//   },
// ];

// const Servicespage = () => {
//   const headingRef = useRef();
//   const HEADING_TEXT = "[ expertise. ]";

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // ── Text Reveal Animation ──────────────────────────────────────
//       const chars = headingRef.current?.querySelectorAll(".char");

//       if (chars && chars.length > 0) {
//         gsap.fromTo(
//           chars,
//           {
//             yPercent: 110, // start below the clip mask
//             opacity: 0,
//             rotateX: -60, // subtle 3D tilt for elegance
//           },
//           {
//             yPercent: 0,
//             opacity: 1,
//             rotateX: 0,
//             duration: 0.8,
//             ease: "power3.out",
//             stagger: 0.04, // each character staggers 40ms apart
//             scrollTrigger: {
//               trigger: headingRef.current,
//               start: "top 80%", // fires when heading enters 80% of viewport
//               toggleActions: "play none none reverse",
//               scrub: true,
//             },
//           },
//         );
//       }

//       ///////////////-----------
//       const cards = gsap.utils.toArray(".serviceCard");

//       const ST = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".ServMainCont",
//           start: "top top",
//           end: "bottom bottom",
//           scrub: true,
//         },
//       });
//       cards.forEach((card, i) => {
//         // if (i === 0) return; // first stays base

//         if (i === 5) {
//           // ST.to(card, {
//           //   top: `${1 * 50}%`,
//           //   ease: "none",
//           // });
//           ST.to(card, {
//             top: `0%`,
//             ease: "none",
//           });
//         } else {
//           ST.to(card, {
//             top: "0%",
//             ease: "none",
//           });
//         }
//       });
//     });

//     return () => ctx.revert(); // cleanup
//   }, []);

//   return (
//     <div
//       id="services"
//       className="w-full ServMainCont h-[300vh] relative bg-white"
//     >
//       <div className="w-full h-svh sticky top-0 left-0">
//         {/* Name */}

//         <div className="w-full h-[40vh]  p-5">
//           <div className="w-full h-fit flex justify-center items-center  mix-blend-difference py-10 z-50">
//             <h1
//               ref={headingRef}
//               className="text-[5vw] uppercase leading-[5vw] max-sm:text-[10vw] max-sm:leading-[10vw] Text_Color_A flex overflow-hidden"
//               style={{ perspective: "600px" }}
//             >
//               {HEADING_TEXT.split("").map((char, i) => (
//                 <span
//                   key={i}
//                   className="char inline-block"
//                   style={{ whiteSpace: char === " " ? "pre" : "normal" }}
//                 >
//                   {char}
//                 </span>
//               ))}
//             </h1>
//           </div>
//         </div>

//         {/* List */}
//         <div className="w-full h-[60vh]  relative flex flex-col">
//           {services.map((item, index) => {
//             return (
//               <div
//                 key={index}
//                 // style={{ top: `${index * 50}%` }}
//                 style={{
//                   backgroundColor: item.bgC,
//                   color: item.Txt,
//                 }}
//                 className={` serviceCard w-full h-full  ${index === 0 ? "top-0" : "top-[100%]"} absolute  left-0 border-t-[1px] border-[#20202021]  flex ServDiv${index + 1}`}
//               >
//                 <div className="w-1/4 h-full flex pr-5 py-5">
//                   <p className="text-[2vw] w-[70%] leading-[2vw] ">
//                     {item.number}
//                   </p>
//                 </div>
//                 <div className="w-2/4 h-full flex flex-col pr-5 py-5">
//                   <p className="text-[3vw] w-[70%] leading-[3vw] ">
//                     {item.title}
//                   </p>
//                   <div className="w-fullh-full flex pr-5 py-5">
//                     <p className="text-[16px] w-[70%] leading-[16px] mt-5 ">
//                       {item.description}
//                       {item.description}
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="w-1/4 h-full flex overflow-hidden  p-[5px]">
//                   <img
//                     src={item.image}
//                     alt="Img"
//                     className="w-full h-full object-center object-cover"
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Servicespage;



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
    bgC: "#FFE4E4",
    Txt: "#202020",
  },
  {
    number: "02",
    title: "SEO",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img2.jpg`,
    bgC: "#FFB3B3",
    Txt: "#202020",
  },
  {
    number: "03",
    title: "Website Development & E-Commerce",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img3.jpg`,
    bgC: "#FF8080",
    Txt: "#202020",
  },
  {
    number: "04",
    title: "Video Marketing",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img4.jpg`,
    bgC: "#FF4D4D",
    Txt: "#ffffff",
  },
  {
    number: "05",
    title: "Social Media Management",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img5.jpg`,
    bgC: "#E60000",
    Txt: "#ffffff",
  },
  {
    number: "06",
    title: "Digital Marketing",
    description:
      "We create engaging brand and campaign identities that resonate with your target audience, from logo design to complete brand experience.",
    image: `/img/about/img6.jpg`,
    bgC: "#990000",
    Txt: "#ffffff",
  },
];

const Servicespage = () => {
  const headingRef = useRef();
  const HEADING_TEXT = "[ expertise. ]";

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
          }
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
        <div className="w-full h-[40vh] max-sm:h-[20vh] p-5">
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
              <div className="hidden sm:flex w-full h-full">
                {/* Number */}
                <div className="w-1/4 h-full flex pr-5 py-5">
                  <p className="text-[2vw] w-[70%] leading-[2vw]">
                    {item.number}
                  </p>
                </div>

                {/* Title + Description */}
                <div className="w-2/4 h-full flex flex-col pr-5 py-5">
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
                </div>

                {/* Image */}
                <div className="w-1/4 h-full flex overflow-hidden p-[5px]">
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