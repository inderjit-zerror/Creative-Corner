import Image from "next/image";
import Link from "next/link";
import { div } from "three/tsl";

export default function Footer() {
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col z-100 pt-[10vh]">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="flex-1 flex items-start justify-between px-6 pt-10 pb-0 relative">
        {/* Left: headline */}
        <h1 className="text-[clamp(2vw,2vw,4rem)] leading-[1.1] font-serif font-normal text-black max-w-[50vw]">
          Social First Content That
          <br />
          Performs, Converts,
          <br />
          and Resonates.
        </h1>

        {/* Right: image + address */}
        <div className="flex flex-col items-end gap-3 mt-0 shrink-0 ml-8">
          <div className="w-[220px] h-[200px] max-lg:h-[25vh] max-lg:aspect-square  relative overflow-hidden">
            {/* Replace src with your actual image */}
            <img
              src={`/img/about/img3.jpg`}
              alt="Do you agree?"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs text-gray-500 tracking-tight text-right">
            Address: 101 73rd St, North Bergen, NJ, 07047
          </p>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer className="mt-auto pr-[30vw] bg-white border-t border-gray-200 mx-0 z-100">
        {/* Divider */}
        {/* <div className="border-t border-gray-200 mx-0" /> */}

        {/* Footer top: 3-column grid */}
        <div className="grid grid-cols-3 items-start px-6 py-10 gap-8">
          {/* Col 1 – Logo */}
          <div>
            <span className="text-2xl font-serif italic text-gray-400 select-none">
              CC
            </span>
          </div>

          {/* Col 2 – Contact */}
          <div className="flex flex-col gap-1 items-end ">
            <div className="w-fit h-[1.1rem] group text-[1rem] leading-[1rem]  flex flex-col overflow-hidden select-none cursor-pointer">
              <div className="w-fit h-fit font-semibold text-black transition-all duration-200 ease-out group-hover:-translate-y-[1rem] ">
                <div> contact@y2b.global</div>
                <div className="w-fit h-fit font-semibold text-black  transition-opacity">
                  contact@y2b.global
                </div>
              </div>
            </div>

            <div className="w-fit h-[1.1rem] group text-[1rem] leading-[1rem]  flex flex-col overflow-hidden select-none cursor-pointer">
              <div className="w-fit h-fit font-semibold text-black transition-all duration-200 ease-out group-hover:-translate-y-[1rem] ">
                <div> +14156199045</div>
                <div className="w-fit h-fit font-semibold text-black  transition-opacity">
                  +14156199045
                </div>
              </div>
            </div>
          </div>

          {/* Col 3 – Nav */}
          <div className="flex flex-col gap-2 text-right  items-end">
            {["Home", "Works", "Playground", "Contact"].map((item) => (
              //   <Link
              //     key={item}
              //     href={`/${item.toLowerCase()}`}
              //     className="text-sm font-semibold text-black hover:opacity-60 transition-opacity"
              //   >
              //     {item}
              //   </Link>

              <div
                key={item}
                className="w-fit h-[1.1rem] group text-[1rem] leading-[1rem]  flex flex-col overflow-hidden select-none cursor-pointer"
              >
                <div className="w-fit h-fit font-semibold text-black transition-all duration-200 ease-out group-hover:-translate-y-[1rem] ">
                  <div>{item}</div>
                  <div className="w-fit h-fit font-semibold text-black  transition-opacity">
                    {item}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer bottom: copyright row */}
        <div className="border-t border-gray-100 px-6 py-4 flex items-center justify-between">
          <p className="text-xs text-gray-400">©2025 All Rights Reserved CC.</p>
          <p className="text-xs text-gray-400">
            Made by{" "}
            <a
              href="#"
              className="underline underline-offset-2 hover:text-black transition-colors"
            >
              Vladislav Sukhov
            </a>
          </p>
          <div className="w-fit h-[1.1rem] group text-[1rem] leading-[1rem]  flex flex-col overflow-hidden select-none cursor-pointer">
            <div className="w-fit h-fit font-semibold text-black transition-all duration-200 ease-out group-hover:-translate-y-[1rem] ">
              <div>Instagram</div>
              <div className="w-fit h-fit font-semibold text-black  transition-opacity">
                Instagram
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
