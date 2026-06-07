function Footer() {
  return (
    <footer className="relative py-10 text-center overflow-hidden">

      {/* 🌌 Strong visible glass background layer */}
      <div className="absolute inset-0 bg-[#1e1825]/80 backdrop-blur-xl border-t border-white/10"></div>

      {/* glow effects */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-pink-500/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-500/10 blur-[160px] rounded-full"></div>

      {/* content */}
      <div className="relative z-10">

        <p className="text-[#d4b8c0] text-sm md:text-base">
          © 2026{" "}
          <span className="font-semibold text-[#f0e8e8]">
            Niketha MS
          </span>{" "}
          | Built with{" "}
          <span className="text-[#c0748a] font-medium">React ⚛️</span>,{" "}
          <span className="text-[#c0748a] font-medium">TypeScript</span> &{" "}
          <span className="text-[#c0748a] font-medium">Tailwind CSS</span> 🚀
        </p>

        <p className="text-[#a07888] text-xs mt-2">
          Designed with passion ✨ for AI & Web Development
        </p>

      </div>
    </footer>
  );
}

export default Footer;