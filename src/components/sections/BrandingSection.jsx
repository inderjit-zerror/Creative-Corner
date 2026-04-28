"use client";

import { useEffect, useRef } from "react";

const services = [
  ["Brand architecture", "Brand positioning", "Naming", "Brand strategy", "Brand development"],
  ["Brand identity", "Brand implementation", "Wayfinding", "Iconography", "Illustration"],
  ["3D", "Print", "Editorial design", "Type design"],
];

export default function BrandingSection({nameDiv, data}) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Neue+Haas+Grotesk+Display+Pro:wght@400;500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .branding-section {
          font-family: 'DM Sans', sans-serif;
          background: #f8f8f6;
          min-height: 100vh;
          // position: relative;
          overflow: hidden;
        }

        .number-display {
         
          font-size: clamp(50px, 10vw, 320px);
       
          line-height: 0.85;
          color: #0a0a0a;
          letter-spacing: -0.04em;
          user-select: none;
        }

        .headline {
          
          font-size: clamp(28px, 4vw, 62px);
        //   font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #0a0a0a;
        }

        .category-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: #0a0a0a;
          text-transform: none;
        }

        .service-item {
         
          font-size: 13.5px;
          color: #888;
          font-weight: 400;
          line-height: 1.9;
          transition: color 0.2s ease;
          cursor: default;
        }

        .service-item:hover {
          color: #0a0a0a;
        }

        .mock-browser {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow:
            0 2px 4px rgba(0,0,0,0.04),
            0 8px 24px rgba(0,0,0,0.08),
            0 24px 64px rgba(0,0,0,0.06);
          width: 100%;
          max-width: 340px;
          position: relative;
        }

        .browser-bar {
          background: #f0f0ee;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .browser-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }

        .browser-content {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .browser-overlay-1 {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 90px;
          height: 100px;
          background: #3b4eff;
          transform: rotate(-5deg);
          opacity: 0.9;
        }

        .browser-overlay-2 {
          position: absolute;
          bottom: -5px;
          right: 30px;
          width: 60px;
          height: 60px;
          background: #00d4aa;
          border-radius: 2px;
          opacity: 0.85;
        }

        .browser-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 80%;
        }

        .browser-text h3 {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255,255,255,0.9);
          line-height: 1.5;
          letter-spacing: -0.01em;
        }

        .browser-text em {
          font-style: italic;
          font-weight: 500;
        }

        .divider {
          height: 1px;
          background: #e0e0dc;
          width: 100%;
        }

        /* Reveal animations */
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        .reveal-delay-5 { transition-delay: 0.5s; }
        .reveal-delay-6 { transition-delay: 0.6s; }

        .number-reveal {
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .number-reveal.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <section ref={sectionRef} className={`branding-section w-full px-8 md:px-16 pt-16 pb-20  ${nameDiv} ${data.number === "01"? "top-0":"top-[100%]"} `}>
        {/* Top row */}
        <div className="flex items-start justify-between mb-0">
          {/* Big Number */}
          <div className="number-reveal reveal" style={{ marginTop: "-12px" }}>
            <span className="number-display Font_Sec">{data.number}</span>
          </div>

          {/* Category label top center-ish */}
          <div
            className="reveal reveal-delay-1"
            style={{ position: "absolute", left: "26.5%", top: "60px" }}
          >
            <span className="category-label Font_Sec">{data.title}</span>
          </div>

          {/* Right side: headline + mock browser */}
          <div className="flex flex-col gap-8" style={{ maxWidth: "58%", paddingTop: "8px" }}>
            {/* Headline */}
            <h2 className="headline reveal reveal-delay-2 Font_Main">
             {data.headline}
            </h2>

            {/* Mock Browser */}
            <div className="reveal reveal-delay-3" style={{ marginLeft: "2px" }}>
              <div className="mock-browser">
                <div className="browser-bar">
                  <div className="browser-dot" style={{ background: "#ff5f56" }} />
                  <div className="browser-dot" style={{ background: "#febc2e" }} />
                  <div className="browser-dot" style={{ background: "#28c840" }} />
                </div>
                <div className="browser-content">
                  {/* Aerial forest image simulation */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(135deg, #1a3a1a 0%, #2d5a27 40%, #1e4a1e 70%, #0f2a0f 100%)",
                      opacity: 0.95,
                    }}
                  />
                  <div className="browser-overlay-1" />
                  <div className="browser-overlay-2" />
                  <div className="browser-text">
                    <h3 className="Font_Sec">
                      {data.subHeadline}
                    </h3>
                  </div>
                  {/* Sidebar UI element */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "56px",
                      background: "rgba(255,255,255,0.06)",
                      backdropFilter: "blur(4px)",
                      borderRight: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      padding: "10px 8px",
                    }}
                  >
                    {["#f05", "#f90", "#0af", "#8f0", "#f50", "#a0f", "#0fa"].map((c, i) => (
                      <div
                        key={i}
                        style={{
                          height: "14px",
                          background: c,
                          borderRadius: "2px",
                          opacity: 0.7,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="divider reveal reveal-delay-4" />

            {/* Services grid */}
            <div className="grid grid-cols-3 gap-x-12 reveal reveal-delay-5">
              {data.capsules.map((col, ci) => (
                <ul key={ci}>
                  {col.map((item, ii) => (
                    <li key={ii} className="service-item Font_Sec">
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}