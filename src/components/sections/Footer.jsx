

import AnimatedTitle from "../common/AnimatedTitle";

const navLinks = [
  { name: "About", path: "#about" },
  { name: "Expertise", path: "#services" },
  { name: "Work", path: "#work" },
];


export default function Footer() {
  return (
    <main className="min-h-screen BGRED font-sans flex flex-col pt-[10vh]">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="flex flex-col lg:flex-row items-start justify-between gap-10 px-6 sm:pt-10 pb-0">
        {/* Left: headline */}
        <h1 className="text-[clamp(1.5rem,2vw,2vw)] Font_Main leading-[1.1] font-normal text-white max-w-full lg:max-w-[50vw]">
          Let’s collaborate and
          <br />
          take your brand
          <br />
          to the next level!
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
      <footer className="mt-auto BGRED border-t Font_Main border-[#fd6161] w-full">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-10">
          {/* Col 1 – Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="h-[50px] font-bold text-white max-sm:text-[#202020] mix-blend-normal">
              <img
                src={`/img/logo/logo.webp`}
                alt="IMG"
                className=" h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Col 2 – Contact */}
          <div className="flex flex-col gap-3 text-center sm:text-left text-white lg:text-right lg:items-end ">
            <a href="mailto:contact-us@yourcreativecorner.com">
              {" "}
              <AnimatedTitle text={`contact-us@yourcreativecorner.com`} />
            </a>
            <a href="tel:+917559410689">
              {" "}
              <AnimatedTitle text={`+91 755 941 0689`} />
            </a>
            <a href="tel:+917738938443">
              {" "}
              <AnimatedTitle text={`+91 773 893 8443`} />
            </a>
            {/* <AnimatedTitle text={`Address: 101 73rd St, North Bergen`} /> */}
          </div>

          {/* Col 3 – Nav */}
          <div className="flex flex-col gap-2 items-center sm:items-start text-white lg:items-end text-center sm:text-left lg:text-right">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="w-fit h-[1.2rem] text-[1rem] leading-[1.2rem] max-sm:ml-auto flex flex-col overflow-hidden select-none cursor-pointer"
              >
                <AnimatedTitle text={item.name} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#fd6161] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white text-center sm:text-left">
            ©2025 All Rights Reserved Creative Corner.
          </p>

          <div className="text-xs flex justify-center items-center gap-1 text-white text-center sm:text-left">
            Developed by <a target="blank" className=" border-b border-white underline" href="https://www.zerrorstudios.com/"> <AnimatedTitle text={'Zerror Studios'} /> </a>
          </div>

          <div className="w-fit text-white h-[1.1rem] text-[1rem] leading-[1rem]  flex flex-col overflow-hidden select-none cursor-pointer">
            <AnimatedTitle text={"Instagram"} />
          </div>
        </div>
      </footer>
    </main>
  );
}
