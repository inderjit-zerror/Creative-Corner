// import Image from "next/image";
// import Link from "next/link";
// import { div } from "three/tsl";
// import AnimatedTitle from "../common/AnimatedTitle";

import AnimatedTitle from "../common/AnimatedTitle";

// export default function Footer() {
//   return (
//     <main className="min-h-screen bg-white font-sans flex flex-col z-100 pt-[10vh]">
//       {/* ─── HERO ─────────────────────────────────────────────── */}
//       <section className="flex-1 flex items-start max-sm:flex-col justify-between px-6 pt-10 max-sm:pt-2 pb-0 relative">
//         {/* Left: headline */}
//         <h1 className="text-[clamp(1.5rem,2vw,4rem)] leading-[1.1]  font-normal text-black max-w-[50vw]">
//           Social First Content That
//           <br />
//           Performs, Converts,
//           <br />
//           and Resonates.
//         </h1>

//         {/* Right: image + address */}
//         <div className="flex flex-col items-end max-sm:m-auto max-sm:items-center gap-3 mt-0 shrink-0 ml-8">
//           <div className="w-[220px] h-[300px] max-lg:h-[25vh] max-lg:aspect-square  relative overflow-hidden">
//             {/* Replace src with your actual image */}
//             <video
//               muted
//               loop
//               autoPlay
//               src={`/Video/video8.mp4`}
//               className="w-full h-full object-cover object-center"
//             ></video>
//           </div>
//         </div>
//       </section>

//       {/* ─── FOOTER ───────────────────────────────────────────── */}
//       <footer className="mt-auto bg-white border-t border-gray-200 w-full">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-10">
//           {/* Col 1 – Logo */}
//           <div className="flex justify-center lg:justify-start">
//             <span className="text-2xl italic text-gray-400 select-none">
//               CC
//             </span>
//           </div>

//           {/* Col 2 – Contact */}
//           <div className="flex flex-col gap-3 text-center  max-sm:mx-auto sm:text-left lg:text-right lg:items-end ">
//             <AnimatedTitle text={`contact@y2b.global`} />
//             <AnimatedTitle text={`+14156199045`} />
//             <AnimatedTitle text={`Address: 101 73rd St, North Bergen`} />
//           </div>

//           {/* Col 3 – Nav */}
//           <div className="flex flex-col gap-2 items-center sm:items-start lg:items-end text-center sm:text-left lg:text-right">
//             {["Home", "Works", "Playground", "Contact"].map((item) => (
//               <div
//                 key={item}
//                 className="w-fit h-[1.2rem] text-[1rem] leading-[1.2rem] flex flex-col  overflow-hidden select-none cursor-pointer"
//               >
//                 <AnimatedTitle text={item} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
//           <p className="text-xs text-gray-400 text-center sm:text-left">
//             ©2025 All Rights Reserved CC.
//           </p>

//           <div className="w-fit h-[1.1rem] text-[1rem] leading-[1rem]  flex flex-col overflow-hidden select-none cursor-pointer">
//             <AnimatedTitle text={"Instagram"} />
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }



export default function Footer() {
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col pt-[10vh]">
      
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="flex flex-col lg:flex-row items-start justify-between gap-10 px-6 sm:pt-10 pb-0">
        
        {/* Left: headline */}
        <h1 className="text-[clamp(1.5rem,2vw,2vw)] Font_Main leading-[1.1] font-normal text-black max-w-full lg:max-w-[50vw]">
          Social First Content That
          <br />
          Performs, Converts,
          <br />
          and Resonates.
        </h1>

        {/* Right: video */}
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <div className="w-full max-w-[260px] max-sm:w-[200px] aspect-[3/4] lg:w-[220px] lg:h-[300px] relative overflow-hidden">
            <video
              muted
              loop
              autoPlay
              playsInline
              src={`/Video/video8.mp4`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer className="mt-auto bg-white border-t Font_Main border-gray-200 w-full">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-10">
          
          {/* Col 1 – Logo */}
          <div className="flex justify-center lg:justify-start">
            <span className="text-2xl italic text-gray-400 select-none">
              CC
            </span>
          </div>

          {/* Col 2 – Contact */}
          <div className="flex flex-col gap-3 text-center sm:text-left lg:text-right lg:items-end ">
            <AnimatedTitle text={`contact@y2b.global`} />
            <AnimatedTitle text={`+14156199045`} />
            <AnimatedTitle text={`Address: 101 73rd St, North Bergen`} />
          </div>

          {/* Col 3 – Nav */}
          <div className="flex flex-col gap-2 items-center sm:items-start lg:items-end text-center sm:text-left lg:text-right">
            {["Home", "Works", "Playground", "Contact"].map((item) => (
              <div
                key={item}
                className="w-fit h-[1.2rem] text-[1rem] leading-[1.2rem] max-sm:ml-auto flex flex-col  overflow-hidden select-none cursor-pointer"
              >
                <AnimatedTitle text={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            ©2025 All Rights Reserved CC.
          </p>

          <div className="w-fit h-[1.1rem] text-[1rem] leading-[1rem]  flex flex-col overflow-hidden select-none cursor-pointer">
            <AnimatedTitle text={"Instagram"} />
          </div>
        </div>
      </footer>
    </main>
  );
}
