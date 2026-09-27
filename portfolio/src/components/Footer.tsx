import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        {/* Copyright */}
        <div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Atul Yadav. All rights reserved.
          </p>

          <p className="mt-1 text-xs text-gray-600">
            Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-5">

          <a
            href="https://github.com/MyAtul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 transition hover:text-white"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/atul-yadav-a34394314?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 transition hover:text-white"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 rounded-lg border border-white/10 p-2 text-gray-500 transition hover:border-white/20 hover:text-white"
          >
            <ArrowUp size={16} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;