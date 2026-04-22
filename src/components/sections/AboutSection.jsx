"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

        {/* Reel-4 */}
        <div className="w-[80vw] h-full flex justify-center items-center">
          <div className="w-[40vw] h-[80vh]">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* CENTER — Script logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-[clamp(2.5rem,6vw,5rem)] leading-none"
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    color: "#2c2420",
                    fontWeight: 600,
                  }}
                >
                  Porter
                </p>
              </div>

              {/* TOP CENTER — Arch icon + wordmark */}
              <div className="absolute top-[8%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[clamp(4px,1vw,10px)]">
                <ArchIcon size="clamp(28px, 3.5vw, 48px)" />
                <p
                  className="tracking-[0.35em] text-[clamp(1.2rem,2.5vw,2.2rem)] font-light"
                  style={{ color: "#2c2420" }}
                >
                  PORTER
                </p>
                <p
                  className="tracking-[0.25em] text-[clamp(0.5rem,1vw,0.85rem)]"
                  style={{ color: "#2c2420" }}
                >
                  VACATION RENTAL
                </p>
                <p
                  className="tracking-[0.25em] text-[clamp(0.5rem,1vw,0.85rem)]"
                  style={{ color: "#2c2420" }}
                >
                  MGMT
                </p>
              </div>

              {/* BOTTOM CENTER — Large wordmark + est. */}
              <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[clamp(2px,0.5vw,6px)]">
                <p
                  className="tracking-[0.35em] text-[clamp(1.8rem,4vw,3.8rem)] font-light"
                  style={{ color: "#2c2420" }}
                >
                  PORTER
                </p>
                <p
                  className="tracking-[0.3em] text-[clamp(0.55rem,1.1vw,1rem)]"
                  style={{ color: "#2c2420" }}
                >
                  E. 2020
                </p>
              </div>

              {/* LEFT — Circular badge (Key icon) */}
              <div className="absolute left-[5%] top-1/2 -translate-y-1/2">
                <CircleBadge icon="key" />
              </div>

              {/* RIGHT — Circular badge (Arch icon) */}
              <div className="absolute right-[5%] top-1/2 -translate-y-1/2">
                <CircleBadge icon="arch" />
              </div>

              {/* BOTTOM LEFT — Arch icon + text */}
              <div className="absolute bottom-[18%] left-[8%] flex flex-col items-center gap-[clamp(2px,0.5vw,6px)]">
                <ArchIcon size="clamp(20px, 2.5vw, 34px)" />
                <p
                  className="tracking-[0.2em] text-[clamp(0.45rem,0.85vw,0.75rem)]"
                  style={{ color: "#2c2420" }}
                >
                  PORTER VRM
                </p>
                <p
                  className="tracking-[0.2em] text-[clamp(0.45rem,0.85vw,0.75rem)]"
                  style={{ color: "#2c2420" }}
                >
                  E. 2020
                </p>
              </div>

              {/* BOTTOM RIGHT — Key icon + text */}
              <div className="absolute bottom-[18%] right-[8%] flex flex-col items-center gap-[clamp(2px,0.5vw,6px)]">
                <KeyIcon size="clamp(20px, 2.5vw, 34px)" />
                <p
                  className="tracking-[0.2em] text-[clamp(0.45rem,0.85vw,0.75rem)]"
                  style={{ color: "#2c2420" }}
                >
                  PORTER VRM
                </p>
                <p
                  className="tracking-[0.2em] text-[clamp(0.45rem,0.85vw,0.75rem)]"
                  style={{ color: "#2c2420" }}
                >
                  E. 2020
                </p>
              </div>
            </div>
          </div>
        </div>

       {/* Reel-5 – Studio‑style hero */}
      <div className="w-[100vw] h-full flex flex-col justify-center px-8 lg:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-light text-[#2c2420] leading-tight tracking-[0.01em]">
            A Creative Corner is a Silent Luxury Agency
          </h2>
          <p className="text-[clamp(0.9rem,1.8vw,1.4rem)] text-gray-600 leading-relaxed">
            We craft refined social narratives for brands that speak softly and sell powerfully. Strategy, storytelling, and rhythm—down to the scroll.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <span className="px-4 py-1.5 text-xs tracking-[0.1em] text-[#2c2420] border border-[#2c2420]/20 rounded-full">
              Creative Corner 
            </span>
          </div>
        </div>
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
