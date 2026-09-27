import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="border-t border-white/10 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Things I've built.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-500">
            A selection of projects where I apply software engineering
            concepts to build practical applications and solve real-world
            problems.
          </p>
        </div>

        {/* Featured projects */}
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;