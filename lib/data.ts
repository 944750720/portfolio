import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import techbase from "@/public/tech-base.png";
import opensearch from "@/public/opensearch.png";
import rakuten from "@/public/rakuten.png";

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
    title: "Tech-Base machine learning event",
    description:
      "I participated in a machine learning event organized by Tech-Base. I made a CNN model to classify images of different types of pens and pencils to hopefully help stuffs in Itoya-Ginza to classify them.",
    tags: ["Python", "CNN", "Tensorflow"],
    imageUrl: techbase,
  },
  {
    title: "Search similar context by OpenSearch and LangChain",
    description:
      "I made a search program using OpenSearch and LangChain to search similar context from a large document, with the help of LLM.",
    tags: ["Python", "OpenSearch", "LangChain", "OpenAI"],
    imageUrl: opensearch,
  },
  {
    title: "Rakuten internship",
    description:
      "I participated in an internship at Rakuten. I implemented the API of adding coupon information for businesses and searching for stores that are offering discounts on food items and the details of discounted food items by food type and store name using SQLite and Django Rest Framework.",
    tags: ["Python", "Django", "React.js", "SQLite"],
    imageUrl: rakuten,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind",
  "Git",
  "PostgreSQL",
  "SQLAlchemy",
  "Python",
  "unittest",
  "Docker",
  "Crawler",
  "OpenSearch",
  "LangChain",
  "AWS S3",
  "AWS EventBridge",
  "Numpy",
] as const;
