import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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