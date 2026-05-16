import Link from "next/link";

export default function UnderProduction() {
return ( <main className="min-h-screen bg-[#070B14] flex items-center justify-center px-6"> <div className="max-w-2xl text-center">


    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
      <div className="w-2 h-2 rounded-full bg-[#4FD1C5] animate-pulse"></div>

      <span className="text-sm tracking-wide text-[#F5F7FA]/70">
        PEERGRID DEVELOPMENT
      </span>
    </div>

    <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#F5F7FA]">
      This Page Is
      <span className="block text-[#6C63FF]">
        Under Production
      </span>
    </h1>

    <p className="mt-6 text-lg leading-relaxed text-[#F5F7FA]/60">
      We’re currently building this section of PeerGrid to create a
      better experience for ambitious student builders, developers,
      and communities.
    </p>

    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

      <Link
        href="/feed"
        className="px-6 py-3 rounded-xl bg-[#6C63FF] hover:bg-[#5b52ff] transition-all duration-300 text-white font-medium"
      >
        Back To Feed
      </Link>

      <Link
        href="/"
        className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-[#F5F7FA] font-medium"
      >
        Explore PeerGrid
      </Link>

    </div>

    <div className="mt-16 flex items-center justify-center gap-3">
      <div className="w-3 h-3 rounded-full bg-[#6C63FF]"></div>
      <div className="w-3 h-3 rounded-full bg-[#4FD1C5]"></div>
      <div className="w-3 h-3 rounded-full bg-[#6C63FF]"></div>
    </div>

  </div>
</main>


);
}
