import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/10 z-50">

      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Niketha
        </h1>

        <ul className="hidden md:flex gap-8">

          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                hover:text-cyan-400
                transition-all
                duration-300
                hover:scale-110
                inline-block
                "
              >
                {item}
              </a>
            </li>
          ))}

        </ul>

        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-8 py-4 hover:bg-slate-800"
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