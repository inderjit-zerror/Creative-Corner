"use client";

import { useState } from "react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const reviews = [
  {
    id: 1,
    name: "Sarah Jonas",
    role: "Product Designer",
    handle: "@gabrun",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Empower your product team to make smarter decisions and drive innovation with our advanced analytics platform.",
    time: "3:00 AM · Sep 27, 2024",
  },
  {
    id: 2,
    name: "Mark Ellis",
    role: "Frontend Engineer",
    handle: "@markellis",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The analytics dashboard transformed how our team tracks performance. Real-time insights have never been this accessible.",
    time: "9:15 AM · Oct 3, 2024",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "UX Researcher",
    handle: "@priyanair",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Incredible platform. We reduced our reporting time by 60% and discovered patterns we had completely missed before.",
    time: "11:45 AM · Oct 10, 2024",
  },
  {
    id: 4,
    name: "James Cole",
    role: "Growth Lead",
    handle: "@jamescole",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Our conversion rates skyrocketed after we started using these insights. The product team is now truly data-driven.",
    time: "2:30 PM · Oct 15, 2024",
  },
  {
    id: 5,
    name: "Lena Hoffmann",
    role: "Data Analyst",
    handle: "@lenahoff",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Clean interface, powerful queries, and lightning-fast dashboards. This is exactly what we needed to scale our ops.",
    time: "6:00 PM · Oct 18, 2024",
  },
  {
    id: 6,
    name: "Carlos Mendez",
    role: "CTO",
    handle: "@carlosmx",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    text: "We evaluated 8 analytics tools. This one stood out for its depth of integrations and the sheer quality of its data models.",
    time: "8:20 AM · Oct 22, 2024",
  },
  {
    id: 7,
    name: "Amara Osei",
    role: "Product Manager",
    handle: "@amarao",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Collaborative, fast, and insightful. Our stakeholders now look forward to weekly data reviews — that says it all.",
    time: "10:55 AM · Nov 1, 2024",
  },
  {
    id: 8,
    name: "Tom Whitfield",
    role: "Marketing Director",
    handle: "@tomwf",
    avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    text: "Attribution clarity was always our blind spot. This platform eliminated the guesswork and saved us thousands monthly.",
    time: "4:10 PM · Nov 7, 2024",
  },
  {
    id: 9,
    name: "Yuki Tanaka",
    role: "Head of Design",
    handle: "@yukitanaka",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    text: "The visualizations are stunning. We've embedded reports directly into our client decks — zero friction, pure professionalism.",
    time: "1:00 PM · Nov 12, 2024",
  },
];

// Split into 3 columns
const col1 = [...reviews.slice(0, 3), ...reviews.slice(0, 3)];
const col2 = [...reviews.slice(3, 6), ...reviews.slice(3, 6)];
const col3 = [...reviews.slice(6, 9), ...reviews.slice(6, 9)];

function ReviewCard({ review }) {
  return (
    <div className="review-card bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-4 w-full cursor-default select-none">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 leading-tight">
            {review.name}
          </p>
          <p className="text-xs text-gray-500">
            {review.role}{" "}
            <span className="text-[red]">{review.handle}</span>
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">{review.text}</p>
      <p className="text-xs text-gray-400">{review.time}</p>
    </div>
  );
}

function ScrollColumn({ reviews, direction = "up", speed = 30 }) {
  const colRef = useRef(null);
  const tweenRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const col = colRef.current;
    if (!col) return;

    const totalHeight = col.scrollHeight / 2;

    // Set starting position based on direction
    if (direction === "down") {
      gsap.set(col, { y: -totalHeight });
    } else {
      gsap.set(col, { y: 0 });
    }

    const startY = direction === "up" ? 0 : -totalHeight;
    const endY = direction === "up" ? -totalHeight : 0;

    const tween = gsap.to(col, {
      y: endY,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        y: gsap.utils.unitize((val) => {
          const v = parseFloat(val);
          if (direction === "up") {
            return v <= -totalHeight ? v + totalHeight : v;
          } else {
            return v >= 0 ? v - totalHeight : v;
          }
        }),
      },
    });

    tweenRef.current = tween;

    const handleEnter = () => {
      isHovered.current = true;
      gsap.to(tween, { timeScale: 0, duration: 0.5, ease: "power2.out" });
    };

    const handleLeave = () => {
      isHovered.current = false;
      gsap.to(tween, { timeScale: 1, duration: 0.5, ease: "power2.in" });
    };

    // Apply hover to each card inside the column
    const cards = col.querySelectorAll(".review-card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      tween.kill();
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [direction, speed]);

  return (
    <div className="overflow-hidden flex-1 min-w-0" style={{ maxHeight: "600px" }}>
      <div ref={colRef} className="flex flex-col will-change-transform">
        {reviews.map((review, i) => (
          <ReviewCard key={`${review.id}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {

  const HeadReviewTextRef = useRef()
    const HEADING_TEXT_Review = "[ REVIEWS. ]";


  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── Text Reveal Animation ──────────────────────────────────────
      const chars = HeadReviewTextRef.current?.querySelectorAll(".char");

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
              trigger: HeadReviewTextRef.current,
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
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-8 overflow-hidden">
      {/* Header */}
       {/* Header */}
      <div className="flex items-center justify-between mb-[10vh] ">
          {/* <h1 className="text-[5vw] leading-[5vw] mx-auto pb-[10vh]  Text_Color_A">[ REVIEWS. ]</h1> */}
           <h1
              ref={HeadReviewTextRef}
              className="text-[5vw] uppercase  mx-auto leading-[5vw] max-sm:text-[10vw] max-sm:leading-[10vw]  Text_Color_A flex overflow-hidden"
              style={{ perspective: "600px" }}
            >
              {HEADING_TEXT_Review.split("").map((char, i) => (
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

      {/* Columns */}
      <div className="max-w-6xl mx-auto relative">
        {/* Top fade */}
        <div
          className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
          style={{
            height: "80px",
            background:
              "linear-gradient(to bottom, #f9fafb 0%, transparent 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
          style={{
            height: "80px",
            background:
              "linear-gradient(to top, #f9fafb 0%, transparent 100%)",
          }}
        />

        {/* 3 Columns on desktop, 1 on mobile, 2 on tablet */}
        <div className="flex gap-4">
          {/* Always show col 1 */}
          <ScrollColumn reviews={col1} direction="up" speed={25} />

          {/* Hide col 2 on mobile */}
          <div className="hidden sm:flex flex-1 min-w-0">
            <ScrollColumn reviews={col2} direction="down" speed={30} />
          </div>

          {/* Hide col 3 on mobile & tablet */}
          <div className="hidden lg:flex flex-1 min-w-0">
            <ScrollColumn reviews={col3} direction="up" speed={20} />
          </div>
        </div>
      </div>
    </section>
  );
}