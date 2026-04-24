"use client";

import { useState } from "react";

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

const ITEMS_PER_PAGE = 8;

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

  return (
    <section id="clients" className="min-h-screen bg-white px-8 py-12 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
          <h1 className="text-[5vw] leading-[5vw] mx-auto py-[7vh] text-[#202020]">[ Our Clients. ]</h1>

        {/* Filter Dropdown */}
        {/* <div className="flex items-center gap-0 relative">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="bg-gray-900 text-white text-sm font-medium px-4 py-2 hover:bg-gray-700 transition-colors"
          >
            Filter
          </button>
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="border border-gray-300 text-gray-700 text-sm px-4 py-2 pr-8 bg-white hover:bg-gray-50 transition-colors appearance-none min-w-[140px] text-left"
            >
              {activeFilter}
            </button>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">▾</span>

            {filterOpen && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 shadow-lg z-20">
                {filterOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setActiveFilter(opt);
                      setVisibleCount(ITEMS_PER_PAGE);
                      setFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      activeFilter === opt
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div> */}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-200">
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
    <div className="bg-gray-100 flex flex-col items-center justify-between aspect-square group cursor-pointer hover:bg-gray-200 transition-colors duration-200 relative overflow-hidden px-6 py-6">
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