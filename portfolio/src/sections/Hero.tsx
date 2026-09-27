import { ArrowDown, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Main content */}
      <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-28 sm:pb-24">
        <div className="max-w-4xl animate-fade-up">
          {/* Availability badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-400" />

            <span className="text-xs font-medium text-gray-400">
              Open to opportunities
            </span>
          </div>

          {/* Small intro */}
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Software Developer
          </p>

          {/* Main heading */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Building software
            <br />

            <span className="text-gray-500">
              that solves real problems.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
            I build practical software solutions with a focus on backend
            engineering and full-stack development. I enjoy turning ideas
            into reliable applications through clean APIs, thoughtful
            architecture, and well-designed databases.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition duration-200 hover:bg-gray-200"
            >
              View Projects

              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:border-white/25 hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/MyAtul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
            >
              <FaGithub size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/atul-yadav-a34394314?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
          </div>

          {/* Technologies */}
          <div className="mt-14 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-widest text-gray-600">
              Focused on
            </p>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-gray-600 transition hover:text-cyan-400 md:block"
        >
          <ArrowDown
            size={20}
            className="animate-bounce"
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;