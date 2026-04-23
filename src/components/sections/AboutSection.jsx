"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const mainContainer = useRef();
  const scrollContainer = useRef();

  useEffect(() => {
    if (!mainContainer.current || !scrollContainer.current) return;
    const totalScrollWidth =
      scrollContainer.current.scrollWidth - window.innerWidth;

    var sliderTween = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        pin: true,
        scrub: true,
        // markers: true,
      },
    });

    sliderTween.to(scrollContainer.current, {
      x: -totalScrollWidth,
      ease: "none",
    });
  }, []);

  return (
    <div
      ref={mainContainer}
      className="w-full h-screen overflow-x-hidden flex relative bg-white mt-[100vh] pointer-events-none"
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
            alt="IMG"
          />
        </div>

        {/* Reel-2 */}
        <div className="w-[80vw] h-full flex justify-center items-center">
          <div
            className="w-full h-[80vh]  py-10 "
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gridTemplateRows: "repeat(10, 1fr)",
              width: "clamp(420px, 58vw, 700px)",
              height: "clamp(480px, 80vh, 820px)",
              gap: "4px",
              position: "relative",
            }}
          >
            {/* ── RED LETTERS ── */}

            {/* "CR" — top left */}
            <div
              className="hl-word   text-[red]"
              style={{
                gridColumn: "1 / 6",
                gridRow: "1 / 4",
                fontSize: "clamp(3.5rem, 8vw, 10rem)",
                display: "flex",
                alignItems: "flex-end",
                paddingBottom: "4px",
                zIndex: 2,
              }}
            >
              CR
            </div>

            {/* "EAT" — middle right */}
            <div
              className="hl-word text-[red]"
              style={{
                gridColumn: "6 / 13",
                gridRow: "4 / 7",
                fontSize: "clamp(3rem, 7vw, 9rem)",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                zIndex: 2,
              }}
            >
              EAT
            </div>

            {/* "IVE" — bottom left */}
            <div
              className="hl-word text-[red]"
              style={{
                gridColumn: "1 / 9",
                gridRow: "8 / 11",
                fontSize: "clamp(3rem, 7vw, 9rem)",
                display: "flex",
                alignItems: "flex-start",
                paddingTop: "4px",
                zIndex: 2,
              }}
            >
              IVE
            </div>

            {/* ── PHOTO CELLS ── */}

            {/* Photo 1 — top right portrait (B&W cowboy/man with hat) */}
            <div
              style={{
                gridColumn: "6 / 13",
                gridRow: "1 / 4",
                overflow: "hidden",
              }}
            >
              <img
                src={`/img/about/img1.jpg`}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
              />
            </div>

            {/* Photo 2 — middle left wide (couple walking) */}
            <div
              style={{
                gridColumn: "1 / 7",
                gridRow: "4 / 7",
                overflow: "hidden",
              }}
            >
              <img
                src={`/img/about/img2.jpg`}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
              />
            </div>

            {/* Photo 3 — large left (man with sunglasses) */}
            <div
              style={{
                gridColumn: "1 / 6",
                gridRow: "7 / 11",
                overflow: "hidden",
              }}
            >
              <img
                src={`/img/about/img3.jpg`}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
              />
            </div>

            {/* Photo 4 — middle right tall (bearded man close-up) */}
            <div
              style={{
                gridColumn: "9 / 13",
                gridRow: "4 / 8",
                overflow: "hidden",
              }}
            >
              <img
                src={`/img/about/img4.jpg`}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
              />
            </div>

            {/* Photo 5 — bottom center (woman reading) */}
            <div
              style={{
                gridColumn: "6 / 10",
                gridRow: "7 / 10",
                overflow: "hidden",
              }}
            >
              <img
                src={`/img/about/img5.jpg`}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
              />
            </div>

            {/* Photo 6 — bottom right small (person with hat) */}
            <div
              style={{
                gridColumn: "10 / 13",
                gridRow: "8 / 11",
                overflow: "hidden",
              }}
            >
              <img
                src={`/img/about/img6.jpg`}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
              />
            </div>

            {/* Photo 7 — city skyline strip */}
            <div
              style={{
                gridColumn: "6 / 10",
                gridRow: "5 / 7",
                overflow: "hidden",
              }}
            >
              <img
                src={`/img/about/img7.jpg`}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "grayscale(100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Reel-3 */}
        <div className="w-[40vw] h-full  overflow-hidden">
          <video
            muted
            autoPlay
            loop
            src={`/Video/video1.mp4`}
            className="w-full h-full object-cover object-center"
            alt="IMG"
          />
        </div>

        {/* Reel-4 –  */}
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center px-8 lg:px-20">
          <section className="bg-white text-neutral-800 h-full  px-6 md:px-16 lg:px-24 py-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* LEFT COLUMN (Images) */}
              <div className="md:col-span-1 flex flex-col gap-10">
                <div className="w-full">
                  <Image
                    src={`/img/about/img3.jpg`}
                    alt="coin in hand"
                    width={400}
                    height={400}
                    className="object-cover grayscale"
                  />
                </div>

                <div className="w-full">
                  <Image
                    src={`/img/about/img4.jpg`}
                    alt="coin close"
                    width={400}
                    height={400}
                    className="object-cover grayscale"
                  />
                </div>

                
              </div>

              {/* RIGHT COLUMN (Text Content) */}
              <div className="md:col-span-2">
                <div className="max-w-xl ml-auto">
                 

                  {/* Paragraphs */}
                  <div className="space-y-6 text-[15px] leading-[15px] ">
                    <p>
                      Every collection should contain mystery. For example, a
                      thing whose nature, use, or meaning is obscure enough to
                      be plausibly unknowable.
                    </p>

                    <p>
                      My friend Tucker Nichols, a great champion of the
                      inexplicable, gives a talk called “Meteorightish” about a
                      rock he found on the beach that he hopes never to learn is
                      or is not a meteorite.
                    </p>

                    <p>
                      This is, as he points out, quite silly, because whenever
                      or however it got here, it is, was, and always will be (at
                      least part of) a rock but space on a collision course with
                      other rocks in space.
                    </p>

                    <p>
                      But a meteorite, in the site-specific sense of a starry
                      traveler that has struck Earth, carries a special allure.
                      Each one being an alien chunk of space-time that
                      represents the threat of our total annihilation.
                    </p>

                    <p>
                      Because actual meteorites are supposedly rare, the trick
                      is to make contact with wonder in things—like Tucker’s
                      meteor-right-for-him— that are easily found or misread,
                      but in either case will never let you down by consenting
                      to be fully understood.
                    </p>

                   
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

/* ── SVG Sub-components ── */

const ArchIcon = ({ size = "36px" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: size, height: size, flexShrink: 0 }}
  >
    <path
      d="M8 32 L8 18 Q8 8 20 8 Q32 8 32 18 L32 32"
      stroke="#2c2420"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <line
      x1="4"
      y1="32"
      x2="36"
      y2="32"
      stroke="#2c2420"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="15"
      y1="32"
      x2="15"
      y2="26"
      stroke="#2c2420"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <line
      x1="25"
      y1="32"
      x2="25"
      y2="26"
      stroke="#2c2420"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const KeyIcon = ({ size = "36px" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: size, height: "auto", flexShrink: 0 }}
  >
    <circle
      cx="6"
      cy="7"
      r="5"
      stroke="#2c2420"
      strokeWidth="1.3"
      fill="none"
    />
    <line
      x1="11"
      y1="7"
      x2="38"
      y2="7"
      stroke="#2c2420"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <line
      x1="32"
      y1="7"
      x2="32"
      y2="11"
      stroke="#2c2420"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <line
      x1="36"
      y1="7"
      x2="36"
      y2="10"
      stroke="#2c2420"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const CircleBadge = ({ icon }) => {
  const r = 42;
  const text = "PORTER VRM · PORTER VRM ·";
  return (
    <svg
      viewBox="0 0 100 100"
      style={{
        width: "clamp(70px, 9vw, 120px)",
        height: "clamp(70px, 9vw, 120px)",
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          id={`circle-${icon}`}
          d={`M 50,50 m -${r},0 a ${r},${r} 0 1,1 ${r * 2},0 a ${r},${r} 0 1,1 -${r * 2},0`}
        />
      </defs>
      {/* Outer ring */}
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="#2c2420"
        strokeWidth="0.8"
        fill="none"
      />
      {/* Curved text */}
      <text
        fontSize="9"
        letterSpacing="3"
        fill="#2c2420"
        fontFamily="sans-serif"
      >
        <textPath href={`#circle-${icon}`} startOffset="0%">
          {text}
        </textPath>
      </text>
      {/* Center icon */}
      <g transform="translate(50,50)">
        {icon === "key" ? (
          <>
            <circle
              cx="-10"
              cy="0"
              r="7"
              stroke="#2c2420"
              strokeWidth="1.2"
              fill="none"
            />
            <line
              x1="-3"
              y1="0"
              x2="14"
              y2="0"
              stroke="#2c2420"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="9"
              y1="0"
              x2="9"
              y2="4"
              stroke="#2c2420"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="12"
              y1="0"
              x2="12"
              y2="3"
              stroke="#2c2420"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </>
        ) : (
          <>
            <path
              d="M-12 10 L-12 2 Q-12 -10 0 -10 Q12 -10 12 2 L12 10"
              stroke="#2c2420"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            <line
              x1="-16"
              y1="10"
              x2="16"
              y2="10"
              stroke="#2c2420"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="-5"
              y1="10"
              x2="-5"
              y2="6"
              stroke="#2c2420"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <line
              x1="5"
              y1="10"
              x2="5"
              y2="6"
              stroke="#2c2420"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </>
        )}
      </g>
    </svg>
  );
};

export default AboutSection;
