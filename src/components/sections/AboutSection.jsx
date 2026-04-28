"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import InfoAbout from "./InfoAbout";
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const mainContainer = useRef();
  const scrollContainer = useRef();

  useEffect(() => {
    if (!mainContainer.current || !scrollContainer.current) return;

    // Disable horizontal scroll animation on mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const totalScrollWidth =
      scrollContainer.current.scrollWidth - window.innerWidth;

    var sliderTween = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        pin: true,
        scrub: true,
      },
    });

    sliderTween.to(scrollContainer.current, {
      x: -totalScrollWidth,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);


  useEffect(()=>{
    const PLT1 = gsap.timeline({
      scrollTrigger:{
        trigger:scrollContainer.current,
        start:'top top',
        end:'top top',
        scrub:true
      }
    })
    PLT1.to('.AboutLine',{
      width:'100%'
    })
  },[])

  return (
    <>
      {/* ─── DESKTOP: horizontal scroll ─── */}
      <div
        id="about"
        ref={mainContainer}
        className="hidden md:flex w-full h-screen aboutDIV overflow-x-hidden relative bg-white mt-[100vh] pointer-events-none"
      >
        <div
          ref={scrollContainer}
          className="w-fit h-screen flex fixed overflow-hidden top-0 left-0 pointer-events-none"
        >
          {/* Reel-1 */}
          <div className="w-[40vw] h-full overflow-hidden">
            <video
              muted
              autoPlay
              loop
              src={`/Video/video8.mp4`}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Reel-2: photo collage */}
          <div className="w-[80vw] h-full flex justify-center items-center">
            <PhotoCollage />
          </div>

          {/* Reel-3 */}
          <div className="w-[40vw] h-full overflow-hidden">
            <video
              muted
              autoPlay
              loop
              src={`/Video/video1.mp4`}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Reel-4: text section */}
          {/* <div className="w-[100vw] h-[100vh] flex flex-col justify-center px-8 lg:px-20">
            <AboutText />
          </div> */}

          <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center">
  <InfoAbout/>
</div>
        </div>
      </div>

      {/* ─── MOBILE: vertical stack ─── */}
      <div id="about" className="flex md:hidden flex-col w-full mt-[100vh] bg-white">
        {/* Video 1 */}
        <div className="w-full h-svh overflow-hidden">
          <video
            muted
            autoPlay
            loop
            playsInline
            src={`/Video/video8.mp4`}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Photo collage */}
        <div className="w-full flex justify-center items-center py-8 px-4">
          <PhotoCollage mobile />
        </div>

        {/* Video 2 */}
        <div className="w-full h-svh overflow-hidden">
          <video
            muted
            autoPlay
            loop
            playsInline
            src={`/Video/video1.mp4`}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text section */}
        <div className="w-full py-12 px-4">
          <AboutText mobile />
        </div>
      </div>
    </>
  );
};

/* ─── Photo Collage ─── */
const PhotoCollage = ({ mobile = false }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "repeat(10, 1fr)",
      width: mobile ? "100%" : "clamp(420px, 58vw, 700px)",
      height: mobile ? "clamp(340px, 80vw, 480px)" : "clamp(480px, 80vh, 820px)",
      gap: "4px",
      position: "relative",
    }}
  >
    {/* "CR" */}
    <div
      className="hl-word text-[red] Font_Main"
      style={{
        gridColumn: "1 / 6",
        gridRow: "1 / 4",
        fontSize: mobile ? "clamp(2rem, 10vw, 3.5rem)" : "clamp(3.5rem, 8vw, 10rem)",
        display: "flex",
        alignItems: "flex-end",
        paddingBottom: "4px",
        zIndex: 2,
      }}
    >
      CR
    </div>

    {/* "EAT" */}
    <div
      className="hl-word text-[red] Font_Main"
      style={{
        gridColumn: "6 / 13",
        gridRow: "4 / 7",
        fontSize: mobile ? "clamp(1.8rem, 9vw, 3rem)" : "clamp(3rem, 7vw, 9rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        zIndex: 2,
      }}
    >
      EAT
    </div>

    {/* "IVE" */}
    <div
      className="hl-word text-[red] Font_Main"
      style={{
        gridColumn: "1 / 9",
        gridRow: "8 / 11",
        fontSize: mobile ? "clamp(1.8rem, 9vw, 3rem)" : "clamp(3rem, 7vw, 9rem)",
        display: "flex",
        alignItems: "flex-start",
        paddingTop: "4px",
        zIndex: 2,
      }}
    >
      IVE
    </div>

    {/* Photo 1 */}
    <div style={{ gridColumn: "6 / 13", gridRow: "1 / 4", overflow: "hidden" }}>
      <img src={`/img/about/img1.jpg`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }} />
    </div>

    {/* Photo 2 */}
    <div style={{ gridColumn: "1 / 7", gridRow: "4 / 7", overflow: "hidden" }}>
      <img src={`/img/about/img2.jpg`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }} />
    </div>

    {/* Photo 3 */}
    <div style={{ gridColumn: "1 / 6", gridRow: "7 / 11", overflow: "hidden" }}>
      <img src={`/img/about/img3.jpg`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }} />
    </div>

    {/* Photo 4 */}
    <div style={{ gridColumn: "9 / 13", gridRow: "4 / 8", overflow: "hidden" }}>
      <img src={`/img/about/img4.jpg`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }} />
    </div>

    {/* Photo 5 */}
    <div style={{ gridColumn: "6 / 10", gridRow: "7 / 10", overflow: "hidden" }}>
      <img src={`/img/about/img5.jpg`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }} />
    </div>

    {/* Photo 6 */}
    <div style={{ gridColumn: "10 / 13", gridRow: "8 / 11", overflow: "hidden" }}>
      <img src={`/img/about/img6.jpg`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }} />
    </div>

    {/* Photo 7 */}
    <div style={{ gridColumn: "6 / 10", gridRow: "5 / 7", overflow: "hidden" }}>
      <img src={`/img/about/img7.jpg`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }} />
    </div>
  </div>
);

/* ─── About Text Section ─── */
const AboutText = ({ mobile = false }) => (
  <section className="  text-neutral-800 h-full  px-0 md:px-16 lg:px-24 py-0 md:py-20">
    <div
      className={`max-w-6xl mx-auto ${
        mobile
          ? "flex flex-col gap-8"
          : "grid grid-cols-1 md:grid-cols-3 gap-12"
      }`}
    >
      {/* Images column */}
      <div
        className={`flex gap-4 ${
          mobile
            ? "flex-row w-full"
            : "md:col-span-1 flex-col gap-10"
        }`}
      >
        <div className={mobile ? "w-1/2" : "w-full"}>
          <Image
            src={`/img/about/img3.jpg`}
            alt="coin in hand"
            width={400}
            height={400}
            className="object-cover grayscale w-full"
          />
        </div>
        <div className={mobile ? "w-1/2" : "w-full"}>
          <Image
            src={`/img/about/img4.jpg`}
            alt="coin close"
            width={400}
            height={400}
            className="object-cover grayscale w-full"
          />
        </div>
      </div>

      {/* Text column */}
      <div
        className={`flex justify-center items-center ${
          mobile ? "w-full" : "md:col-span-2"
        }`}
      >
        <div
          className={`h-fit text-justify ${
            mobile ? "w-full" : "max-w-lg ml-auto"
          }`}
        >
          <div className="space-y-6 text-[18px] leading-[1.6]">
            <p>
              Every collection should contain mystery. For example, a thing
              whose nature, use, or meaning is obscure enough to be plausibly
              unknowable.
            </p>
            <p>
              My friend Tucker Nichols, a great champion of the inexplicable,
              gives a talk called "Meteorightish" about a rock he found on the
              beach that he hopes never to learn is or is not a meteorite.
            </p>
            <p>
              This is, as he points out, quite silly, because whenever or
              however it got here, it is, was, and always will be (at least
              part of) a rock but space on a collision course with other rocks
              in space.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;