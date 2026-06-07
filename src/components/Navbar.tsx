import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Correct order confirmed
  const links = ["About", "Skills", "Education", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 w-full bg-[#C9D6DF]/85 backdrop-blur-xl border-b border-white/40 z-50">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* 👤 Brand */}
        <h1 className="text-2xl font-extrabold text-slate-800 tracking-wide">
          Niketha ✨
        </h1>

        {/* 💻 Desktop Menu */}
        <ul className="hidden md:flex gap-8 ml-auto text-slate-700 font-medium">

          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                  relative
                  hover:text-slate-900
                  transition-all duration-300
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:w-0
                  after:h-[2px]
                  after:bg-slate-800
                  hover:after:w-full
                  after:transition-all
                "
              >
                {item}
              </a>
            </li>
          ))}

        </ul>

        {/* 📱 Mobile button */}
        <button
          className="md:hidden text-2xl text-slate-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* 📱 Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#B4C4D4] border-t border-white/40">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-3 text-slate-800 hover:bg-white/40 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;