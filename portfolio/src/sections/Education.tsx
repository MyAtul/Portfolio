function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/10 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My academic journey.
          </h2>
        </div>

        {/* Education card */}
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">

          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-cyan-400/30" />

          <div className="pl-6 sm:pl-8">

            {/* Degree */}
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
              <div>
                <p className="text-sm font-medium text-cyan-400">
                  Computer Engineering
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  A. C. Patil College of Engineering
                </h3>
              </div>

              <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-500">
                2023 – Present
              </span>
            </div>

            <p className="mt-5 max-w-3xl leading-7 text-gray-400">
              Currently pursuing a degree in Computer Engineering with a
              focus on software development, data structures, databases,
              cloud computing, and modern application development.
            </p>

            {/* Areas */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Data Structures",
                "Database Systems",
                "Software Engineering",
                "Cloud Computing",
                "Machine Learning",
                "Web Development",
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-md bg-white/[0.05] px-3 py-1.5 text-xs text-gray-400"
                >
                  {area}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Resume */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:p-8">

          <div>
            <h3 className="text-lg font-semibold text-white">
              Want to know more?
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Download my resume for a detailed overview of my skills,
              projects, and experience.
            </p>
          </div>

          <a
            href="/ATUL_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            View Resume
          </a>

        </div>

      </div>
    </section>
  );
}

export default Education;