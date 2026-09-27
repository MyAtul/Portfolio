import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiSpringsecurity,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiPostgresql,
  SiMysql,
  SiHibernate,
  SiFlyway,
  SiMan,
  SiGradle,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: React.ElementType;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    description:
      "Building APIs, authentication systems, and server-side applications.",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Spring Security", icon: SiSpringsecurity },
      { name: "REST APIs", icon: FaJava },
      { name: "JWT", icon: FaJava },
      { name: "WebSockets", icon: FaJava },
    ],
  },

  {
    title: "Frontend Development",
    description:
      "Creating responsive and interactive web applications.",
    skills: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
    ],
  },

  {
    title: "Databases",
    description:
      "Designing and working with relational databases and application data.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "JPA / Hibernate", icon: SiHibernate },
      { name: "Flyway", icon: SiFlyway },
    ],
  },

  {
    title: "Tools & DevOps",
    description:
      "Development workflows, version control, containers, and build tools.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "Maven", icon: SiMan },
      { name: "Gradle", icon: SiGradle },
    ],
  },
];