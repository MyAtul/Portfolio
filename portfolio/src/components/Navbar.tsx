import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6">

        {/* Desktop / Mobile header */}
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-lg font-bold tracking-tight"
          >
            Atul Yadav<span className="text-cyan-400">.</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#education"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Education
            </a>

            <a
              href="#contact"
              className="text-sm text-gray-400 transition hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Desktop social links */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
            >
              <FaLinkedin size={19} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="border-t border-white/10 py-5 md:hidden">

            <div className="flex flex-col gap-1">

              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                Projects
              </a>

              <a
                href="#education"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                Education
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
              >
                Contact
              </a>

            </div>

            {/* Mobile social links */}
            <div className="mt-4 flex gap-3 border-t border-white/10 pt-4">

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                <FaLinkedin size={19} />
              </a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;