"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useContact } from "../contexts/ContactContext";
import AnimatedTitle from "./AnimatedTitle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const tl = useRef(null);

  const { setIsContactOpen } = useContact(); // Get contact state

  // ... existing useEffect code remains the same ...

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsContactOpen(true); // Open contact form
  };

  // Initialize GSAP timeline
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    tl.current = gsap.timeline({ paused: true });
    tl.current
      .set(menu, { autoAlpha: 0, y: -20 })
      .to(menu, { duration: 0.5, autoAlpha: 1, y: 0, ease: "power2.out" });

    return () => {
      if (tl.current) tl.current.kill();
    };
  }, []);

  // Toggle menu with GSAP
  useEffect(() => {
    if (!tl.current) return;

    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-99 sm:mix-blend-difference  ">
      <div className="mx-auto w-full sm:px-6 lg:px-8 px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-white max-sm:text-[#202020]">
            CC
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {/* <a href="#home" className="text-white relative group ">
              <AnimatedTitle text={'Index'} />
              <div className="w-0 h-[1px] absolute bottom-[-12] left-0 transition-all duration-200 ease-out bg-white group-hover:w-full"></div>
            </a> */}
            <a href="#about" className="text-white relative group ">
              <AnimatedTitle text={'About'} />
              <div className="w-0 h-[1px] AboutLine absolute bottom-[-12] left-0 transition-all duration-200 ease-out bg-white group-hover:w-full"></div>
            </a>
            <a href="#services" className="text-white relative group ">
              <AnimatedTitle text={'Expertise'} />
              
              <div className="w-0 h-[1px] ExpertiseLine absolute bottom-[-12] left-0 transition-all duration-200 ease-out bg-white group-hover:w-full"></div>
            </a>
            <a href="#work" className="text-white relative group ">
              <AnimatedTitle text={'Work'} />
              
              <div className="w-0 h-[1px] WorkLine absolute bottom-[-12] left-0 transition-all duration-200 ease-out bg-white group-hover:w-full"></div>
            </a>
            <a href="#contact" className="text-white relative group ">
              
              <div onClick={handleContactClick}><AnimatedTitle text={'Contact'} /></div>
              <div className="w-0 h-[1px] Line absolute bottom-[-12] left-0 transition-all duration-200 ease-out bg-white group-hover:w-full"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (GSAP animated) */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden z-999 ${isOpen ? "pointer-events-auto h-svh" : "pointer-events-none h-0"}`}
        style={{ visibility: "hidden", opacity: 0 }} // Let GSAP take over from here
      >
        <div className="flex flex-col w-full h-svh space-y-3 py-4 justify-center items-center px-4 z-999 bg-white ">
          {/* <a
            href="#home"
            className="py-2 text-[red] text-[1.5rem]"
            onClick={() => setIsOpen(false)}
          >
            Index
          </a> */}
          <a
            href="#about"
            className="py-2 text-[red] text-[1.5rem]"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="py-2 text-[red] text-[1.5rem]"
            onClick={() => setIsOpen(false)}
          >
            Expertise
          </a>
          <a
            href="#work"
            className="py-2 text-[red] text-[1.5rem]"
            onClick={() => setIsOpen(false)}
          >
            Work
          </a>
          <a
            href="#contact"
            className="py-2 text-[red] text-[1.5rem]"
            onClick={() => setIsOpen(false)}
          >
            <p onClick={handleContactClick}>Contact</p>
          </a>
        </div>
      </div>
    </nav>
  );
}
