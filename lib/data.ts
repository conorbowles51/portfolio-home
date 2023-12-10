import React from "react";
import aiImg from "@/public/aicompanion.png";
import bjImg from "@/public/blackjack.png";
import unityImg from "@/public/unitytool.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "AI Companion App",
    description:
      "This is a full stack project that allows users to create AI companions and chat with them.",
    tags: ["React", "Next.js", "Tailwind", "Prisma", "OpenAI", "Pinecone", "ShadcnUI"],
    imageUrl: aiImg,
  },
  {
    title: "Blackjack Game",
    description:
      "I worked on a Blackjack game that allows players to hit, stand, or double, and earn chips as they go!",
    tags: ["React", "Javascript", "Tailwind", "Next.js"],
    imageUrl: bjImg,
  },
  {
    title: "Unity Procedual Generation Tool",
    description:
      "A tool I wrote for the Unity game engine that allows developers to have levels procedurally generated at runtime.",
    tags: ["Unity", "C#", "hlsl"],
    imageUrl: unityImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C#",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Python",
  "Django",
  "Framer Motion",
] as const;