function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Building with purpose.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">

          {/* Main description */}
           <div>
                <p className="text-lg leading-8 text-gray-300">
                    Building practical software solutions with a strong focus on
                    <span className="font-medium text-white"> backend engineering </span>
                    and
                    <span className="font-medium text-white"> full-stack development</span>.
                    I enjoy turning ideas into reliable applications through clean APIs,
                    thoughtful architecture, and well-designed databases.
                </p>

                <p className="mt-6 leading-7 text-gray-400">
                    Passionate about solving
                    <span className="text-gray-200"> real-world problems </span>
                    through software and creating applications that are functional,
                    maintainable, and scalable. I believe good software is not just about
                    making something work, but about building it in a way that can grow
                    with the problem it solves.
                </p>

                <p className="mt-6 leading-7 text-gray-400">
                    Continuously exploring new technologies and challenging myself through
                    <span className="text-gray-200"> real-world projects</span>, with the
                    goal of becoming a stronger engineer and creating software that makes
                    a meaningful difference.
                </p>
            </div>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-2xl font-bold text-white">
                Backend
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                APIs, authentication, databases and server-side systems.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-2xl font-bold text-white">
                Full Stack
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Building complete applications from frontend to backend.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-2xl font-bold text-white">
                Problem Solving
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Practicing DSA and improving algorithmic thinking.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-2xl font-bold text-white">
                Continuous Learning
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Exploring modern tools, architecture and development
                practices.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;