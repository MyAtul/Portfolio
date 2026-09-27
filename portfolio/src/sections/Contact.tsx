import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Let's build something useful.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            I'm open to opportunities, collaborations, and conversations
            about software development. If you'd like to connect, feel free
            to reach out.
          </p>
        </div>

        {/* Contact links */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:atuly2409@gmail.com"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <Mail
              size={22}
              className="text-gray-500 transition group-hover:text-cyan-400"
            />

            <h3 className="mt-5 font-semibold text-white">
              Email
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              atuly2409@gmail.com
            </p>

            <ArrowUpRight
              size={16}
              className="mt-5 text-gray-600 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MyAtul"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <FaGithub
              size={22}
              className="text-gray-500 transition group-hover:text-cyan-400"
            />

            <h3 className="mt-5 font-semibold text-white">
              GitHub
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              View my projects
            </p>

            <ArrowUpRight
              size={16}
              className="mt-5 text-gray-600 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/atul-yadav-a34394314?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <FaLinkedin
              size={22}
              className="text-gray-500 transition group-hover:text-cyan-400"
            />

            <h3 className="mt-5 font-semibold text-white">
              LinkedIn
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Connect with me
            </p>

            <ArrowUpRight
              size={16}
              className="mt-5 text-gray-600 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
            />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;