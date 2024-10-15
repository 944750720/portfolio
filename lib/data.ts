import React from "react";
import { FaLaptopCode } from "react-icons/fa";
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
    title: "South China University of Technology, Bachelor's degree in Electrical Engineering",
    location: "Guangzhou, China",
    description:
      "I graduated from South China University of Technology with a Bachelor’s degree in Electrical Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2016.09 - 2020.07",
  },
  {
    title: "The University of Tokyo, Master's degree in EEIS",
    location: "Tokyo, Japan",
    description:
      "I finished my research about radar and unsupervised machine learning at The University of Tokyo for a Master's degree in Electrical Engineering and Information Systems (EEIS).",
    icon: React.createElement(LuGraduationCap),
    date: "2022.10 - 2024.09",
  },
  {
    title: "Software Engineer intern",
    location: "Tokyo, Japan",
    description:
      "I had participated in short-term internships at 楽天グループ and 日本コントロールシステム株式会社, among others. I had also worked as a long-term AI(LLM) Engineer intern at 株式会社クウゼン for a year. From 2024.10, I started to work as long-term intern at 株式会社ケミカン and 株式会社IGSA simultaneously.",
    icon: React.createElement(FaLaptopCode),
    date: "2022.10 - present",
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
