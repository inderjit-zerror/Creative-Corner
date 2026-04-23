"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="w-full min-h-screen bg-white text-neutral-800 px-4 sm:px-6 lg:px-20 py-16 lg:py-24 relative z-90">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
          Let’s Build Something Great
        </h1>
        <p className="text-neutral-500 max-w-xl">
          Have a project in mind or just want to say hello? We’d love to hear from you.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* LEFT SIDE - CONTACT INFO */}
        <div className="space-y-10">
          
          <div>
            <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-2">
              Contact
            </h3>
            <p className="text-lg">hello@creativecorner.com</p>
            <p className="text-lg">+91 98765 43210</p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-2">
              Office
            </h3>
            <p className="text-neutral-600">
              2nd Floor, Creative Building <br />
              Mumbai, India
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-2">
              Social
            </h3>
            <div className="flex gap-4 text-neutral-600">
              <a href="#" className="hover:text-black transition">Instagram</a>
              <a href="#" className="hover:text-black transition">LinkedIn</a>
              <a href="#" className="hover:text-black transition">Twitter</a>
            </div>
          </div>

          {/* Optional Map Placeholder */}
          <div className="w-full h-[200px] bg-neutral-100 flex items-center justify-center text-sm text-neutral-400">
            Map Placeholder
          </div>

        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          
          <div>
            <label className="text-sm text-neutral-500">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border-b border-neutral-300 focus:border-black outline-none py-2 transition"
            />
          </div>

          <div>
            <label className="text-sm text-neutral-500">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border-b border-neutral-300 focus:border-black outline-none py-2 transition"
            />
          </div>

          <div>
            <label className="text-sm text-neutral-500">Your Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border-b border-neutral-300 focus:border-black outline-none py-2 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 bg-black text-white py-3 px-6 rounded-full w-fit hover:bg-neutral-800 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}