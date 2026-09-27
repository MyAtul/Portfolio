import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
        project.featured
          ? "border-cyan-400/20 bg-cyan-400/[0.03] hover:border-cyan-400/40"
          : "border-white/10 bg-white/[0.03] hover:border-white/20"
      }`}
    >
      {/* Top gradient */}
      <div
        className={`absolute inset-x-0 top-0 h-px ${
          project.featured
            ? "bg-cyan-400/50"
            : "bg-white/10"
        }`}
      />

      <div className="flex h-full flex-col p-6 sm:p-7">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">

          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-gray-600">
              {project.number}
            </span>

            {project.featured && (
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-cyan-400">
                Featured
              </span>
            )}
          </div>

          <ArrowUpRight
            size={20}
            className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
          />
        </div>

        {/* Title */}
        <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm leading-7 text-gray-400">
          {project.description}
        </p>

        {/* Impact */}
        <div className="mt-6 border-l border-cyan-400/30 pl-4">
          <p className="text-[10px] font-medium uppercase tracking-widest text-gray-600">
            Impact
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            {project.impact}
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-gray-400 transition group-hover:border-white/15 group-hover:text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center gap-5 pt-8">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
            >
              <FaGithub size={16} />
              Source
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}

        </div>

      </div>
    </article>
  );
}

export default ProjectCard;