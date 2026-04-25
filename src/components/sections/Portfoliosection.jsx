"use client";

import { useState } from "react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const allPortfolioItems = [
  { id: 1, name: "passion capital", tag: "Early Stage", logo: null, style: "italic lowercase text-3xl font-semibold leading-tight" },
  { id: 2, name: "HEAPSGOOD", tag: "Eco Packaging", logo: null, style: "uppercase text-2xl font-black tracking-tight" },
  { id: 3, name: "SquarePeg□", tag: "Venture", logo: null, style: "text-2xl font-light tracking-tight" },
  { id: 4, name: "WAVEPISTON", tag: "Wave Energy", logo: null, style: "uppercase text-xl font-medium tracking-[0.2em]" },
  { id: 5, name: "bt.", tag: "Design Briefing", logo: null, style: "text-5xl font-black tracking-tighter" },
  { id: 6, name: "≋ Ripple", tag: "Wind Farm", logo: null, style: "text-2xl font-semibold tracking-wide" },
  { id: 7, name: "✾ AirTree", tag: "Venture", logo: null, style: "text-2xl font-medium tracking-wide" },
  { id: 8, name: "◀ bereev", tag: "Bereavement", logo: null, style: "text-2xl font-medium tracking-wide" },
  { id: 9, name: "GreenLeaf", tag: "Sustainability", logo: null, style: "text-2xl font-bold tracking-tight" },
  { id: 10, name: "NOVA", tag: "Deep Tech", logo: null, style: "uppercase text-3xl font-black tracking-[0.3em]" },
  { id: 11, name: "Bloom", tag: "Health", logo: null, style: "text-3xl font-light italic tracking-wide" },
  { id: 12, name: "FORGE", tag: "Manufacturing", logo: null, style: "uppercase text-2xl font-black tracking-widest" },
];

const filterOptions = ["All (80)", "Early Stage", "Venture", "Eco Packaging", "Wave Energy", "Design Briefing", "Wind Farm", "Bereavement", "Sustainability", "Deep Tech", "Health", "Manufacturing"];

const ITEMS_PER_PAGE = 14;

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All (80)");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered =
    activeFilter === "All (80)"
      ? allPortfolioItems
      : allPortfolioItems.filter((item) => item.tag === activeFilter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const HeadCliteTextRef = useRef()
    const HEADING_TEXT_Client = "[ Our Clients. ]";


  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Text Reveal Animation ──────────────────────────────────────
      const chars = HeadCliteTextRef.current?.querySelectorAll(".char");

      if (chars && chars.length > 0) {
        gsap.fromTo(
          chars,
          {
            yPercent: 110,       // start below the clip mask
            opacity: 0,
            rotateX: -60,        // subtle 3D tilt for elegance
          },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.04,       // each character staggers 40ms apart
            scrollTrigger: {
              trigger: HeadCliteTextRef.current,
              start: "top 80%",  // fires when heading enters 80% of viewport
              toggleActions: "play none none reverse",
              scrub:true
            },
          }
        );
      }



     
    });

    return () => ctx.revert(); // cleanup
  }, []);

  

  return (
    <section id="clients" className="min-h-screen bg-white px-8 max-sm:px-0 max-sm:pb-0 py-[10vh] font-sans">
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
        <span className={`text-gray-900 text-center leading-none select-none ${item.style}`}>
          {item.name}
        </span>
      </div>

      {/* Tag */}
      <div className="w-full flex justify-end">
        <span className="text-[11px] text-gray-500 tracking-wide">{item.tag}</span>
      </div>
    </div>
  );
}