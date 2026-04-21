'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Influencer Marketing',
    subtitle: 'Build trust through creators your audience already follows.',
    description:
      'We identify the right influencers, shape the campaign strategy, and create content that feels authentic while driving brand credibility and impact.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'SEO (Search Engine Optimization)',
    subtitle: 'Rank higher and get discovered faster.',
    description:
      'Our SEO systems improve visibility, increase organic traffic, and position your brand where it matters most — at the top of search results.',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Website Development & E-Commerce',
    subtitle: 'Modern websites that look sharp and convert better.',
    description:
      'We design and develop high-performance websites and e-commerce experiences that scale with your business and help turn visitors into customers.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Video Marketing',
    subtitle: 'Motion content that captures attention instantly.',
    description:
      'From concept to execution, we create compelling video content that tells your story, boosts engagement, and leaves a strong impression.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Social Media Management',
    subtitle: 'Engage, grow, and convert your community.',
    description:
      'We handle strategy, content creation, posting, and audience interaction so your brand can build loyalty and turn followers into customers.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Digital Marketing',
    subtitle: 'Multi-channel campaigns built for measurable growth.',
    description:
      'Our targeted campaigns across channels are designed to maximize reach, improve ROI, and drive business growth with clear performance tracking.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Cyber Security Services',
    subtitle: 'Protect your digital presence with confidence.',
    description:
      'We safeguard your website, data, and online infrastructure with advanced security solutions that help keep your business secure and trusted.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function ServicesPage() {
  const pageRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: 'power3.out',
      });

      sectionRefs.current.forEach((el, index) => {
        if (!el) return;

        const text = el.querySelector('.service-text');
        const image = el.querySelector('.service-image');
        const isEven = index % 2 === 0;

        gsap.fromTo(
          text,
          { opacity: 0, x: isEven ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        );

        gsap.fromTo(
          image,
          { opacity: 0, x: isEven ? 40 : -40, scale: 0.98 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="min-h-screen bg-white text-[#111111] pt-10">
      <section className="mx-auto w-full px-10 py-10 md:px-10 md:py-14">
        <div className="border-b border-black/15 pb-6 md:pb-8">
          <p className="hero-title text-[clamp(3rem,8vw,7rem)] leading-none font-light tracking-[-0.06em]">
            Services
          </p>
          <p className="hero-subtitle mt-4 max-w-2xl text-sm md:text-base leading-6 text-black/70">
            Not just services — smart strategies that work. Every solution is tailored to your
            brand, audience, and goals to deliver real results.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full px-10 pb-12 md:px-10 md:pb-20">
        <div className="space-y-0">
          {services.map((service, index) => (
            <article
              key={service.title}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="grid grid-cols-1 gap-6 border-b border-black/15 py-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:py-10"
            >
              <div
                className={`service-text flex flex-col justify-between ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
              >
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.28em] text-black/45">
                      0{index + 1}
                    </span>
                    <span className="h-px flex-1 bg-black/15" />
                  </div>

                  <h2 className="max-w-2xl text-[clamp(1.6rem,3vw,3rem)] leading-[0.95] font-light tracking-[-0.05em]">
                    {service.title}
                  </h2>

                  <p className="mt-4 max-w-xl text-sm md:text-[15px] leading-7 text-black/70">
                    {service.subtitle}
                  </p>

                  <p className="mt-5 max-w-xl text-sm md:text-[15px] leading-7 text-black/60">
                    {service.description}
                  </p>
                </div>

                {/* <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.26em] text-black/55">
                  <span className="h-px w-10 bg-black/20" />
                  <span>Learn More</span>
                </div> */}
              </div>

              <div
                className={`service-image ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}
              >
                <div className="group relative aspect-[16/10] overflow-hidden bg-black/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/5 transition duration-700 group-hover:bg-black/0" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-14 md:px-10 md:pb-20">
        <div className="grid gap-6 border-t border-black/15 pt-8 md:grid-cols-3 md:pt-10">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-black/45">Approach</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-black/65">
              We create custom strategies instead of one-size-fits-all packages.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-black/45">Execution</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-black/65">
              Every service is designed to look premium, feel modern, and drive conversions.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-black/45">Result</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-black/65">
              Clear growth, stronger visibility, and a brand experience that stands out.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}