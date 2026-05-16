"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const featuredEcosystems = ["Newton", "Scaler", "100x", "Polaris", "NIAT"];

  const features = [
    {
      title: "Verified Student Reviews",
      desc: "Only verified students from listed colleges can share experiences and reviews.",
    },
    {
      title: "Builder Communities",
      desc: "Connect with developers, founders, designers, and ambitious builders.",
    },
    {
      title: "Real Student Projects",
      desc: "Explore what students are actually building inside modern colleges.",
    },
    {
      title: "Startup Culture Insights",
      desc: "Understand hackathons, peer quality, coding culture, and opportunities.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Explore Ecosystems",
      desc: "Discover real college culture through projects, reviews, and student activity.",
    },
    {
      step: "02",
      title: "Connect With Builders",
      desc: "Talk to students from modern startup-driven colleges and communities.",
    },
    {
      step: "03",
      title: "Grow Publicly",
      desc: "Verified students can share projects, journeys, hackathons, and experiences.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#070B14] text-[#F5F7FA] overflow-hidden relative">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#6C63FF]/20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-[#4FD1C5]/10 blur-[120px] rounded-full"></div>
      </div>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#070B14]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#6C63FF] flex items-center justify-center text-lg font-bold shadow-lg shadow-[#6C63FF]/20">
              P
            </div>

            <div>
              <h1 className="text-lg md:text-xl font-semibold tracking-tight">
                PeerGrid
              </h1>

              <p className="text-xs text-white/50">New Age Collages</p>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition">
              Features
            </a>

            <a href="#how-it-works" className="hover:text-white transition">
              How It Works
            </a>

            <a href="#vision" className="hover:text-white transition">
              Vision
            </a>
          </div>

          {/* Button */}
          <Link
            href="/feed"
            className="px-2 lg:px-5 xl:px-5 py-2.5 rounded-xl bg-[#6C63FF] hover:bg-[#5d55f6] transition-all duration-300 text-sm font-medium shadow-lg shadow-[#6C63FF]/20 hover:scale-[1.03]"
          >
            Enter Platform
          </Link>
        </div>
      </nav>
      {/* Hero */}
      <section className="relative">
        {/* Floating Logos */}

        <div className="max-w-7xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-20 md:pb-28 relative z-10">
          <div
            className={`max-w-5xl transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#4FD1C5] animate-pulse"></div>

              <span className="text-sm tracking-wide text-white/70">
                VERIFIED BUILDER COMMUNITY
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
              Discover The
              <span className="block text-[#6C63FF]">
                New Age College Ecosystem
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl">
              PeerGrid helps students explore modern internet-first colleges
              through real student experiences, builder communities, startup
              culture, coding projects, and verified campus insights.
            </p>

            <p className="mt-4 text-base md:text-lg text-white/40 max-w-2xl">
              Discover what students are actually building inside colleges like
              Newton School of Technology, Scaler School of Technology, 100x
              School, Polaris, NIAT, and other emerging tech ecosystems.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/feed"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#6C63FF] hover:bg-[#5d55f6] transition-all duration-300 text-sm md:text-base font-semibold shadow-xl shadow-[#6C63FF]/20 hover:scale-[1.03] text-center"
              >
                Explore Feed
              </Link>

              <Link
                href="/colleges"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm md:text-base font-semibold hover:scale-[1.03] text-center"
              >
                Explore Colleges
              </Link>
            </div>

            {/* Featured Ecosystems */}
            <div className="mt-12 flex flex-wrap items-center gap-3">
              {featuredEcosystems.map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/60 hover:bg-white/[0.05] transition-all duration-300"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Stats */}
          </div>
        </div>
      </section>
      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-5 md:px-8 py-24">
        <div className="mb-16">
          <p className="text-[#4FD1C5] text-sm font-medium mb-3">
            WHY PEERGRID
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight max-w-3xl">
            Built Around
            <span className="text-[#6C63FF]"> Real Student Experiences</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="group p-7 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#6C63FF]/10 border border-[#6C63FF]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <div className="w-6 h-6 rounded-lg bg-[#6C63FF]"></div>
              </div>

              <h3 className="text-xl font-semibold mb-3 tracking-tight">
                {item.title}
              </h3>

              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* How It Works */}
      <section
        id="how-it-works"
        className="max-w-7xl mx-auto px-5 md:px-8 py-24"
      >
        <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-8 md:p-16">
          <p className="text-[#4FD1C5] text-sm font-medium mb-4">
            HOW IT WORKS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight max-w-3xl">
            A Platform Where Students Help Students
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {steps.map((item, index) => (
              <div key={index}>
                <span className="text-[#6C63FF] text-5xl font-bold tracking-tight">
                  {item.step}
                </span>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Vision */}
      <section id="vision" className="max-w-7xl mx-auto px-5 md:px-8 py-24">
        <div className="max-w-4xl">
          <p className="text-[#4FD1C5] text-sm font-medium mb-4">OUR VISION</p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Build The Largest
            <span className="block text-[#6C63FF]">
              Student Builder Ecosystem
            </span>
          </h2>

          <p className="mt-8 text-lg text-white/60 leading-relaxed">
            PeerGrid is focused on helping students make better college
            decisions, discover real builder ecosystems, connect with ambitious
            peers, showcase projects, and grow publicly through authentic
            communities.
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-lg tracking-tight">PeerGrid</h3>

            <p className="text-sm text-white/50 mt-1">
              Discover real new-age college ecosystems.
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="/feed" className="hover:text-white transition">
              Feed
            </Link>

            <Link href="/colleges" className="hover:text-white transition">
              Colleges
            </Link>

            <Link href="/community" className="hover:text-white transition">
              Community
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
