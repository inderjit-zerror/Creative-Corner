"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandingSection from "./BrandingSection";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Digital Marketing",
    category: "Performance",

    headline: `Accelerating growth with performance-driven marketing systems.`,
    subHeadline: `Strategy meets <em>execution</em> for real <em>results.</em>`,

    capsules: [
      ["Paid ads", "Campaign strategy", "Audience targeting"],
      ["Funnels", "Landing pages", "Conversion optimization"],
      ["Email marketing", "Automation", "Growth scaling"],
    ],
    data: [
      {
        value: "8+",
        unit: "years",
        description:
          "Experience designing websites for brands across lifestyle, wellness, and professional services industries.",
      },
      {
        value: "120+",
        unit: "projects",
        description:
          "Successfully launched from ideation through complex, custom builds.",
      },
      {
        value: "35+",
        unit: "happy clients",
        description:
          "Many of whom return for new collaborations, referrals, or ongoing design support.",
      },
      {
        value: "99%",
        unit: "satisfaction",
        description:
          "Based on client feedback collected over the last two years.",
      },
    ],
  },
  ,

  {
    number: "02",
    title: "Influencer Marketing",
    category: "Marketing",

    headline: `We're brand catalysts, supercharging your transformation with design.`,
    subHeadline: `Smart <em>living</em> starts with smart <em>building.</em>`,

    capsules: [
      [
        "Campaign strategy",
        "Influencer research",
        "Creator partnerships",
        "Brand collaborations",
      ],
      [
        "Content planning",
        "UGC creation",
        "Reels & short-form",
        "Platform targeting",
      ],
      ["Performance tracking", "Analytics", "ROI measurement"],
    ],
    data: [
      {
        value: "8+",
        unit: "years",
        description:
          "Experience designing websites for brands across lifestyle, wellness, and professional services industries.",
      },
      {
        value: "120+",
        unit: "projects",
        description:
          "Successfully launched from ideation through complex, custom builds.",
      },
      {
        value: "35+",
        unit: "happy clients",
        description:
          "Many of whom return for new collaborations, referrals, or ongoing design support.",
      },
      {
        value: "99%",
        unit: "satisfaction",
        description:
          "Based on client feedback collected over the last two years.",
      },
    ],
  },

   {
    number: "03",
    title: "Video Production",
    category: "Content",

    headline: `Crafting stories that capture attention and drive engagement.`,
    subHeadline: `Content that <em>moves</em> people, performs <em>better.</em>`,

    capsules: [
      ["Video strategy", "Storyboarding", "Creative direction"],
      ["Editing", "Motion graphics", "Sound design"],
      ["Ads production", "Reels", "YouTube optimization"],
    ],
    data: [
      {
        value: "8+",
        unit: "years",
        description:
          "Experience designing websites for brands across lifestyle, wellness, and professional services industries.",
      },
      {
        value: "120+",
        unit: "projects",
        description:
          "Successfully launched from ideation through complex, custom builds.",
      },
      {
        value: "35+",
        unit: "happy clients",
        description:
          "Many of whom return for new collaborations, referrals, or ongoing design support.",
      },
      {
        value: "99%",
        unit: "satisfaction",
        description:
          "Based on client feedback collected over the last two years.",
      },
    ],
  },


  {
    number: "04",
    title: "Website Development",
    category: "Development",

    headline: `Building scalable, high-performance digital experiences.`,
    subHeadline: `Great <em>products</em> begin with strong <em>foundations.</em>`,

    capsules: [
      ["UI/UX design", "Wireframing", "Prototyping", "User flows"],
      ["Frontend development", "Backend systems", "API integration"],
      ["E-commerce", "CMS setup", "Performance optimization"],
    ],
    data: [
      {
        value: "8+",
        unit: "years",
        description:
          "Experience designing websites for brands across lifestyle, wellness, and professional services industries.",
      },
      {
        value: "120+",
        unit: "projects",
        description:
          "Successfully launched from ideation through complex, custom builds.",
      },
      {
        value: "35+",
        unit: "happy clients",
        description:
          "Many of whom return for new collaborations, referrals, or ongoing design support.",
      },
      {
        value: "99%",
        unit: "satisfaction",
        description:
          "Based on client feedback collected over the last two years.",
      },
    ],
  }, 
];

const Servicespage = () => {
  const headingRef = useRef();
  const HEADING_TEXT = "[ expertise. ]";

  useEffect(() => {
    const PLT1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ServMainCont",
        start: "top top",
        end: "top top",
        scrub: true,
      },
    });
    PLT1.to(".AboutLine", {
      width: "0%",
    });
    PLT1.to(".ExpertiseLine", {
      width: "100%",
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Text Reveal Animation ──────────────────────────────────────
      const chars = headingRef.current?.querySelectorAll(".EXPDIV");

      if (chars && chars.length > 0) {
        gsap.fromTo(
          chars,
          {
            yPercent: 110,
            opacity: 0,
            rotateX: -60,
          },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.04,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
              scrub: true,
            },
          },
        );
      }

      // ── Stacking Cards Animation ───────────────────────────────────
      const cards = gsap.utils.toArray(".EXPDIV");

      const ST = gsap.timeline({
        scrollTrigger: {
          trigger: ".ServMainCont",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      cards.forEach((card, i) => {
      ST.to(card, {
        top: "0%",
        ease: "none",
        onUpdate: function () {
          // When this card is animating in, blur the one below it
          if (i > 0) {
            const progress = this.progress();
            gsap.set(cards[i - 1], {
              filter: `blur(${progress * 6}px)`,
              scale: 1 - progress * 0.03,
              opacity: 1 - progress * 0.4,
            });
          }
        },
      });
    });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="services"
      className="w-full ServMainCont h-[400vh] relative bg-white"
    >
      <div className="w-full h-svh sticky top-0 left-0 overflow-hidden ">
        {services.map((data, index) => {
          return (
            <BrandingSection
              nameDiv={`EXPDIV absolute left-0  `}
              data={data}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Servicespage;
