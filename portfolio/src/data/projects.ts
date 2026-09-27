export interface Project {
  number: string;
  title: string;
  description: string;
  impact: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "DevHub",
    description:
      "A developer platform focused on reusable, production-ready software modules that developers can understand, configure, and integrate into their own applications.",
    impact:
      "Reduces repetitive development work by providing reusable building blocks and implementation-ready code.",
    technologies: [
      "React",
      "TypeScript",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "JWT",
      "Docker",
    ],
    github: "https://github.com/MyAtul/DevHub",
    live: "https://dev-hub-gamma-three.vercel.app/",
    featured: true,
  },

  {
    number: "02",
    title: "AirDash",
    description:
      "A local file-sharing Android application that allows users to transfer files between devices connected to the same Wi-Fi network without requiring internet access.",
    impact:
      "Enables fast, offline file sharing through a browser-based interface, allowing users to transfer files without requiring the receiving device to install the application.",
    technologies: [
      "Android",
      "Kotlin",
      "NanoHTTPD",
      "HTTPS",
      "QR Code",
      "mDNS",
      "Local Networking",
    ],
    github: "https://github.com/MyAtul/Airdash",
    featured: true,
  },

  {
    number: "03",
    title: "Real-Time Chat Application",
    description:
      "A real-time communication application that enables users to exchange messages through persistent WebSocket connections.",
    impact:
      "Demonstrates real-time communication architecture and the use of WebSockets to build responsive, interactive applications.",
    technologies: [
      "React",
      "Spring Boot",
      "WebSockets",
      "Java",
      "MySQL",
    ],
    github: "https://github.com/MyAtul/Chat_Application",
    live: "https://chat-application-pi-sepia.vercel.app",
  },

  {
    number: "04",
    title: "SOC_AI",
    description:
      "A major project currently under development that explores the application of artificial intelligence to cybersecurity operations.",
    impact:
      "Explores how AI can be applied to assist cybersecurity workflows and improve the analysis of security-related information.",
    technologies: [
      "AI",
      "Cybersecurity",
      "React",
      "Spring Boot",
      "Java",
    ],
    github: "https://github.com/MyAtul/SOC_AI",
  },
];