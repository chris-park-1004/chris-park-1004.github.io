export const links = {
  career: "/career/",
  email: "mailto:honggyupark1004@gmail.com",
  github: "https://github.com/chris-park-1004",
  linkedin: "https://linkedin.com/in/honggyu-park-b68627249",
};

export interface Project {
  id: "cicd" | "handoff" | "loc8u";
  number: string;
  category: string;
  title: string;
  description: string;
  href: string;
  action: string;
  resources?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    id: "cicd",
    number: "01",
    category: "INFRASTRUCTURE / DEVOPS",
    title: "Self-hosted Jenkins",
    description:
      "Jenkins on my own machine, with GitHub-triggered builds, Cloudflare-secured access, and Prometheus + Grafana monitoring.",
    href: "/projects/ci-cd/",
    action: "Explore the setup",
    resources: [
      {
        label: "Grafana dashboard",
        href: "https://chrispark1004.grafana.net/public-dashboards/2d066cd8728b4f5cb5b01ce7be2a505f",
      },
    ],
  },
  {
    id: "handoff",
    number: "02",
    category: "DEVELOPER TOOLS / AI",
    title: "New agent. Same context.",
    description:
      "Handoff carries context between AI coding sessions, so the next agent can pick up where the last one left off.",
    href: "https://github.com/chris-park-1004/Handoff",
    action: "View on GitHub",
    resources: [
      {
        label: "View on Devpost",
        href: "https://devpost.com/software/handoff-v0hbjk",
      },
    ],
  },
  {
    id: "loc8u",
    number: "03",
    category: "CONNECTED SYSTEMS / IOT",
    title: "Connection beyond coverage.",
    description:
      "Loc8U is a LoRa-based visitor safety system. I built the Python–Kafka bridge connecting remote devices to the application.",
    href: "https://setprojectday.ca/post/2026/loc8u/",
    action: "Discover Loc8U",
  },
];
