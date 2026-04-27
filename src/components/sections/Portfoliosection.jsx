"use client";

import { useState } from "react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContact } from "../contexts/ContactContext";

const allPortfolioItems = [
  {
    id: 1,
    name: "passion capital",
    tag: "Early Stage",
    logo: null,
    style: "italic lowercase text-3xl font-semibold leading-tight",
  },
  {
    id: 2,
    name: "HEAPSGOOD",
    tag: "Eco Packaging",
    logo: null,
    style: "uppercase text-2xl font-black tracking-tight",
  },
  {
    id: 3,
    name: "SquarePeg□",
    tag: "Venture",
    logo: null,
    style: "text-2xl font-light tracking-tight",
  },
  {
    id: 4,
    name: "WAVEPISTON",
    tag: "Wave Energy",
    logo: null,
    style: "uppercase text-xl font-medium tracking-[0.2em]",
  },
  {
    id: 5,
    name: "bt.",
    tag: "Design Briefing",
    logo: null,
    style: "text-5xl font-black tracking-tighter",
  },
  {
    id: 6,
    name: "≋ Ripple",
    tag: "Wind Farm",
    logo: null,
    style: "text-2xl font-semibold tracking-wide",
  },
  {
    id: 7,
    name: "✾ AirTree",
    tag: "Venture",
    logo: null,
    style: "text-2xl font-medium tracking-wide",
  },
  {
    id: 8,
    name: "◀ bereev",
    tag: "Bereavement",
    logo: null,
    style: "text-2xl font-medium tracking-wide",
  },
  {
    id: 9,
    name: "GreenLeaf",
    tag: "Sustainability",
    logo: null,
    style: "text-2xl font-bold tracking-tight",
  },
  {
    id: 10,
    name: "NOVA",
    tag: "Deep Tech",
    logo: null,
    style: "uppercase text-3xl font-black tracking-[0.3em]",
  },
  {
    id: 11,
    name: "Bloom",
    tag: "Health",
    logo: null,
    style: "text-3xl font-light italic tracking-wide",
  },
  // { id: 12, name: "FORGE", tag: "Manufacturing", logo: null, style: "uppercase text-2xl font-black tracking-widest" },
];

const filterOptions = [
  "All (80)",
  "Early Stage",
  "Venture",
  "Eco Packaging",
  "Wave Energy",
  "Design Briefing",
  "Wind Farm",
  "Bereavement",
  "Sustainability",
  "Deep Tech",
  "Health",
  "Manufacturing",
];

const ITEMS_PER_PAGE = 14;

export default function PortfolioSection() {

  const { setIsContactOpen } = useContact();
  const [activeFilter, setActiveFilter] = useState("All (80)");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered =
    activeFilter === "All (80)"
      ? allPortfolioItems
      : allPortfolioItems.filter((item) => item.tag === activeFilter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const HeadCliteTextRef = useRef();
  const HEADING_TEXT_Client = "[ Our Clients. ]";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Text Reveal Animation ──────────────────────────────────────
      const chars = HeadCliteTextRef.current?.querySelectorAll(".char");

      if (chars && chars.length > 0) {
        gsap.fromTo(
          chars,
          {
            yPercent: 110, // start below the clip mask
            opacity: 0,
            rotateX: -60, // subtle 3D tilt for elegance
          },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.04, // each character staggers 40ms apart
            scrollTrigger: {
              trigger: HeadCliteTextRef.current,
              start: "top 80%", // fires when heading enters 80% of viewport
              toggleActions: "play none none reverse",
              scrub: true,
            },
          },
        );
      }
    });

    return () => ctx.revert(); // cleanup
  }, []);


   const handleContactClick = (e) => {
    e.preventDefault();
    setIsContactOpen(true); // Open contact form
  };

  return (
    <section
      id="clients"
      className="min-h-screen bg-white px-8 max-sm:px-0 max-sm:pb-0 py-[10vh] font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-[10vh] bg-white">
        {/* <h1 className="text-[5vw] leading-[5vw] mx-auto py-[7vh] bg-white Text_Color_A">[ Our Clients. ]</h1> */}
        <h1
          ref={HeadCliteTextRef}
          className="text-[5vw] uppercase  mx-auto leading-[5vw] max-sm:text-[10vw] max-sm:leading-[10vw] Text_Color_A flex overflow-hidden"
          style={{ perspective: "600px" }}
        >
          {HEADING_TEXT_Client.split("").map((char, i) => (
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

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-200 max-sm:bg-white">
        {visible.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}

        {/* CTA Card */}
        <div onClick={handleContactClick} className="bg-[#202020] flex flex-col items-center justify-center aspect-square cursor-pointer relative overflow-hidden group px-6 py-6">
          {/* Animated noise grain texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundSize: "150px 150px",
            }}
          />

          {/* Red sweep — slides up on hover */}
          <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

        
          {/* Main content */}
          <div className="relative z-10 text-center flex flex-col items-center gap-3">
            {/* Big heading */}
            <h2
              className="text-white  leading-none tracking-tighter"
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
              }}
            >
              Be One
              <br />
              Of Them
            </h2>

            {/* Animated arrow CTA */}
            <div className="flex items-center gap-2 mt-1 overflow-hidden">
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 group-hover:text-white transition-colors duration-500">
                Let's Talk
              </span>
              <svg
                width="20"
                height="10"
                viewBox="0 0 20 10"
                fill="none"
                className="text-white/40 group-hover:text-white -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                <path
                  d="M0 5H18M14 1L18 5L14 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Bottom line */}
          <div className="absolute bottom-0 left-0 h-[2px] bg-[#FF0000] group-hover:bg-white w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-10" />
        </div>
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
            className="bg-gray-900 text-white text-sm font-medium px-6 py-3 hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            Load More <span className="text-base leading-none">+</span>
          </button>
        </div>
      )}

      {/* Close filter on outside click */}
      {filterOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setFilterOpen(false)}
        />
      )}
    </section>
  );
}

function PortfolioCard({ item }) {
  return (
    <div className="bg-gray-100 max-sm:bg-white flex flex-col items-center justify-between aspect-square group cursor-pointer hover:bg-gray-200 transition-colors duration-200 relative overflow-hidden px-6 py-6">
      {/* Logo / Name */}
      <div className="flex-1 flex items-center justify-center w-full">
        <span
          className={`text-gray-900 text-center leading-none select-none ${item.style}`}
        >
          {item.name}
        </span>
      </div>

      {/* Tag */}
      <div className="w-full flex justify-end">
        <span className="text-[11px] text-gray-500 tracking-wide">
          {item.tag}
        </span>
      </div>
    </div>
  );
}
