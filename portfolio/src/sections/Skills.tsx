import { skillCategories } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-500">
            Technologies and tools I use to build, test, and maintain
            software applications.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              {/* Category heading */}
              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {category.description}
              </p>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-400 transition duration-200 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                    >
                      <Icon size={17} />

                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;