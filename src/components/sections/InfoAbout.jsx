// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// export default function InfoAbout() {
//   const containerRef = useRef(null);
//   const headlineRef = useRef(null);
//   const img1Ref = useRef(null);
//   const img2Ref = useRef(null);
//   const bodyTextRef = useRef(null);
//   const col1Ref = useRef(null);
//   const col2Ref = useRef(null);
//   const nextBtnRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//       // Headline slides in from left
//       tl.fromTo(
//         headlineRef.current,
//         { x: -120, opacity: 0 },
//         { x: 0, opacity: 1, duration: 1 },
//       )
//         // Top-right image drops in
//         .fromTo(
//           img1Ref.current,
//           { y: -60, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.9 },
//           "-=0.6",
//         )
//         // Center palm image rises
//         .fromTo(
//           img2Ref.current,
//           { y: 80, opacity: 0, scale: 0.96 },
//           { y: 0, opacity: 1, scale: 1, duration: 1 },
//           "-=0.5",
//         )
//         // Body text fades in
//         .fromTo(
//           bodyTextRef.current,
//           { opacity: 0, x: -30 },
//           { opacity: 1, x: 0, duration: 0.7 },
//           "-=0.5",
//         )
//         // Right columns stagger in
//         .fromTo(
//           [col1Ref.current, col2Ref.current],
//           { opacity: 0, x: 30 },
//           { opacity: 1, x: 0, duration: 0.7, stagger: 0.18 },
//           "-=0.4",
//         )
//         // Next button
//         .fromTo(
//           nextBtnRef.current,
//           { opacity: 0, y: 20 },
//           { opacity: 1, y: 0, duration: 0.5 },
//           "-=0.2",
//         );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-full h-full  bg-white font-sans flex items-center justify-center p-4"
//       style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
//     >
//       {/* Google Font import */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600;700&family=Barlow:wght@300;400;500&display=swap');
//         * { box-sizing: border-box; }
//         .explore-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr 1fr;
//           grid-template-rows: auto auto;
//            width: 90%;       
// //   max-width: 1200px;
// height: 95%;
//           border: 1px solid #e0e0e0;
//         }
//         .cell {
//           border: 1px solid #e0e0e0;
//         }
//         .btn-next:hover {
//           background: #111;
//           color: #fff;
//           transition: all 0.3s ease;
//         }
//       `}</style>

//       <div className="explore-grid  ">
//         {/* Row 1 */}

//         {/* Headline cell — spans 2 cols */}
//         <div
//           ref={headlineRef}
//           className="cell flex items-center px-8 py-10"
//           style={{ gridColumn: "1 / 3", gridRow: "1 / 2" }}
//         >
//           <h1
//             style={{
//               fontFamily: "'Barlow Condensed', sans-serif",
//               fontSize: "clamp(3.5rem, 9vw, 7rem)",
//               fontWeight: 700,
//               letterSpacing: "-0.02em",
//               lineHeight: 1,
//               color: "#111",
//               textTransform: "uppercase",
//             }}
//           >
//             EXPLORE
//           </h1>
//         </div>

//         {/* Top-right image */}
//         <div
//           ref={img1Ref}
//           className="cell overflow-hidden"
//           style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80&auto=format&fit=crop"
//             alt="Venice canal bridge"
//             className="w-full h-full object-cover"
//             style={{ filter: "grayscale(100%)", minHeight: "220px" }}
//           />
//         </div>

//         {/* Row 2 */}

//         {/* Left body text */}
//         <div
//           ref={bodyTextRef}
//           className="cell flex flex-col justify-center px-8 py-10"
//           style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}
//         >
//           <p
//             style={{
//               fontFamily: "'Barlow', sans-serif",
//               fontSize: "0.8rem",
//               lineHeight: 1.75,
//               color: "#333",
//               textAlign: "justify",
//             }}
//           >
//             Traveling is one of the most exciting and exciting activities
//             available to man. They provide an opportunity to see new cultures,
//             meet different people, enjoy the beauties of nature and discover
//             many new things.
//           </p>

//           {/* Next button */}
//           <div className="mt-8">
//             <button
//               ref={nextBtnRef}
//               className="btn-next flex items-center gap-2 border border-gray-400 px-4 py-2 text-xs tracking-widest uppercase"
//               style={{
//                 fontFamily: "'Barlow Condensed', sans-serif",
//                 fontWeight: 600,
//                 letterSpacing: "0.12em",
//                 color: "#111",
//                 background: "transparent",
//                 cursor: "pointer",
//               }}
//             >
//               NEXT
//               <svg
//                 width="18"
//                 height="10"
//                 viewBox="0 0 18 10"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M1 5H17M13 1L17 5L13 9"
//                   stroke="currentColor"
//                   strokeWidth="1.4"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Center palm image */}
//         <div
//           ref={img2Ref}
//           className="cell overflow-hidden"
//           style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80&auto=format&fit=crop"
//             alt="Person swinging on palm tree over ocean"
//             className="w-full h-full object-cover"
//             style={{ filter: "grayscale(100%)", minHeight: "360px" }}
//           />
//         </div>

//         {/* Right column — two cells stacked */}
//         <div
//           className="cell flex flex-col"
//           style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}
//         >
//           {/* Type of Travel */}
//           <div
//             ref={col1Ref}
//             className="flex-1 flex flex-col justify-center px-6 py-8 border-b border-gray-200"
//           >
//             <h2
//               style={{
//                 fontFamily: "'Barlow Condensed', sans-serif",
//                 fontSize: "0.72rem",
//                 fontWeight: 700,
//                 letterSpacing: "0.15em",
//                 textTransform: "uppercase",
//                 color: "#111",
//                 marginBottom: "0.6rem",
//               }}
//             >
//               Type of Travel
//             </h2>
//             <p
//               style={{
//                 fontFamily: "'Barlow', sans-serif",
//                 fontSize: "0.75rem",
//                 lineHeight: 1.7,
//                 color: "#444",
//               }}
//             >
//               Some people prefer organized tours that include sightseeing and
//               excursions, while others prefer to travel on their own, exploring
//               new places and discovering unfamiliar territories.
//             </p>
//           </div>

//           {/* Important to Remember */}
//           <div
//             ref={col2Ref}
//             className="flex-1 flex flex-col justify-center px-6 py-8"
//           >
//             <h2
//               style={{
//                 fontFamily: "'Barlow Condensed', sans-serif",
//                 fontSize: "0.72rem",
//                 fontWeight: 700,
//                 letterSpacing: "0.15em",
//                 textTransform: "uppercase",
//                 color: "#111",
//                 marginBottom: "0.6rem",
//               }}
//             >
//               Important to Remember
//             </h2>
//             <p
//               style={{
//                 fontFamily: "'Barlow', sans-serif",
//                 fontSize: "0.75rem",
//                 lineHeight: 1.7,
//                 color: "#444",
//               }}
//             >
//               When traveling, it is important to respect local culture and
//               traditions, as well as to preserve nature and the environment.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const stats = [
  { label: "Views Generated", value: "3M+" },
  { label: "Happy Clients",   value: "250+" },
  { label: "Properties",      value: "$850M" },
  { label: "Satisfaction",    value: "98%" },
];

export default function InfoAbout() {
  const containerRef  = useRef(null);
  const headlineRef   = useRef(null);
  const img1Ref       = useRef(null);
  const img2Ref       = useRef(null);
  const bodyTextRef   = useRef(null);
  const statsRef      = useRef(null);
  const nextBtnRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(headlineRef.current,
        { x: -100, opacity: 0 },
        { x: 0,    opacity: 1, duration: 1 })

        .fromTo(img1Ref.current,
          { y: -50, opacity: 0 },
          { y: 0,   opacity: 1, duration: 0.9 }, "-=0.6")

        .fromTo(img2Ref.current,
          { y: 70, opacity: 0, scale: 0.96 },
          { y: 0,  opacity: 1, scale: 1, duration: 1 }, "-=0.5")

        .fromTo(bodyTextRef.current,
          { opacity: 0, x: -24 },
          { opacity: 1, x: 0,   duration: 0.7 }, "-=0.5")

        .fromTo(statsRef.current?.children ?? [],
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.13 }, "-=0.4")

        .fromTo(nextBtnRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0,  duration: 0.45 }, "-=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Google Font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600;700&family=Barlow:wght@300;400;500&display=swap"
      />

      {/* Full-viewport wrapper */}
      <div
        ref={containerRef}
        className="w-screen h-screen bg-white overflow-hidden flex flex-col"
        
      >
        {/*
          ┌──────────────────────────────┬────────────────┐  ROW 1
          │  EXPLORE  (headline)         │  Venice img    │
          ├────────────────┬─────────────┴────────────────┤  ROW 2
          │  Body + NEXT   │  Palm img   │  4 stat cards  │
          └────────────────┴─────────────┴────────────────┘
        */}
        <div className="flex-1 grid grid-cols-3 grid-rows-2 border border-zinc-200 min-h-0">

          {/* ── R1-C1-2 : Headline ── */}
          <div
            ref={headlineRef}
            className="col-span-2 row-span-1 border border-zinc-200 flex items-center px-8 xl:px-14"
          >
            <h1
              className="uppercase leading-none Font_Main tracking-tight text-zinc-950 select-none"
              style={{
               
                fontSize:   "clamp(3.2rem, 9vw, 7rem)",
              
              }}
            >
              ABOUT 
            </h1>
          </div>

          {/* ── R1-C3 : Venice image ── */}
          <div
            ref={img1Ref}
            className="col-span-1 row-span-1 border border-zinc-200 overflow-hidden"
          >
             <video muted autoPlay loop src={`/Video/video8.mp4`} className="w-full h-full object-cover object-center"></video>
            {/* <img
              src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80&auto=format&fit=crop"
              alt="Venice canal bridge"
              className="w-full h-full object-cover grayscale"
            /> */}
          </div>

          {/* ── R2-C1 : Body text + NEXT btn ── */}
          <div
            ref={bodyTextRef}
            className="col-span-1 row-span-1 border border-zinc-200 flex flex-col justify-between p-8 xl:p-10"
          >
            <p
              className="text-zinc-600 leading-relaxed text-justify Font_Sec"
              style={{ fontSize: "clamp(1remrem, 1.5rem, 1.5rem)" }}
            >
              Traveling is one of the most enriching activities available to
              humankind. It offers the chance to witness new cultures, meet
              different people, marvel at natural wonders, and continuously
              discover new dimensions of the world — and of yourself.
             
            </p>

            {/* <button
              ref={nextBtnRef}
              className="group mt-6 self-start flex items-center gap-2 border border-zinc-400 px-4 py-2 uppercase tracking-widest text-zinc-900 bg-transparent hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all duration-300"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize:   "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
              }}
            >
              Next
              <svg
                width="18" height="10" viewBox="0 0 18 10" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M1 5H17M13 1L17 5L13 9"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button> */}
          </div>

          {/* ── R2-C2 : Palm image ── */}
          <div
            ref={img2Ref}
            className="col-span-1 row-span-1 border border-zinc-200 overflow-hidden"
          >
            <video muted autoPlay loop src={`/Video/video7.mp4`} className="w-full h-full object-cover object-center"></video>
            {/* <img
              src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80&auto=format&fit=crop"
              alt="Person swinging on palm tree over ocean"
              className="w-full h-full object-cover grayscale"
            /> */}
          </div>

          {/* ── R2-C3 : Stat boxes (2×2 grid) ── */}
          <div
            ref={statsRef}
            className="col-span-1 row-span-1 border border-zinc-200 bg-[red] grid grid-cols-2 grid-rows-2"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col justify-end p-5 xl:p-6 border border-[#f87373]"
              >
                <span
                  className="text-[white] uppercase tracking-widest Font_Sec mb-1"
                  style={{
                    
                    fontSize: "clamp(0.52rem, 0.85vw, 0.68rem)",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                  }}
                >
                  {s.label}
                </span>
                <span
                  className="text-white leading-none Font_Main"
                  style={{
              
                    fontSize:   "clamp(1.6rem, 3.2vw, 2.6rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
