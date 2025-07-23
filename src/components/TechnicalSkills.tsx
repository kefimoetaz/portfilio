'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase,
  FaJs, FaAws, FaJava, FaGamepad
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress,
  SiPytorch, SiDocker, SiOpengl
} from 'react-icons/si';
import { BiData } from 'react-icons/bi';
import { DiAptana } from 'react-icons/di';

const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React", level: 90, icon: <FaReact className="text-[#61DAFB]" />, description: "Building responsive and interactive user interfaces" },
      { name: "TypeScript", level: 85, icon: <SiTypescript className="text-[#3178C6]" />, description: "Type-safe JavaScript development" },
      { name: "JavaScript", level: 90, icon: <FaJs className="text-[#F7DF1E]" />, description: "Core web development language" },
      { name: "Next.js", level: 85, icon: <SiNextdotjs className="text-gray-900 dark:text-white" />, description: "React framework for production" },
      { name: "TailwindCSS", level: 90, icon: <SiTailwindcss className="text-[#06B6D4]" />, description: "Utility-first CSS framework" },
      { name: "HTML5", level: 95, icon: <FaHtml5 className="text-[#E34F26]" />, description: "Semantic markup and structure" },
      { name: "CSS3", level: 95, icon: <FaCss3Alt className="text-[#1572B6]" />, description: "Advanced styling and animations" },
    ]
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 85, icon: <FaNodeJs className="text-[#339933]" />, description: "Server-side JavaScript runtime" },
      { name: "Python", level: 85, icon: <FaPython className="text-[#3776AB]" />, description: "Versatile backend programming" },
      { name: "Java", level: 88, icon: <FaJava className="text-[#007396]" />, description: "Enterprise-grade applications and game development" },
      { name: "Express", level: 80, icon: <SiExpress className="text-gray-900 dark:text-white" />, description: "Node.js web application framework" },
      { name: "MongoDB", level: 85, icon: <SiMongodb className="text-[#47A248]" />, description: "NoSQL database" },
      { name: "SQL", level: 80, icon: <FaDatabase className="text-[#4479A1]" />, description: "Relational database management" },
    ]
  },
  {
    name: "Game Development",
    skills: [
      { name: "LWJGL", level: 85, icon: <FaGamepad className="text-[#E34F26]" />, description: "Lightweight Java Game Library for OpenGL integration" },
      { name: "OpenGL", level: 82, icon: <SiOpengl className="text-[#5586A4]" />, description: "3D graphics and rendering" },
      { name: "Swing/AWT", level: 85, icon: <DiAptana className="text-[#007396]" />, description: "Java GUI development and 2D graphics" },
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90, icon: <FaGitAlt className="text-[#F05032]" />, description: "Version control system" },
      { name: "Docker", level: 75, icon: <SiDocker className="text-[#2496ED]" />, description: "Container platform" },
      { name: "AWS", level: 70, icon: <FaAws className="text-[#232F3E]" />, description: "Cloud computing services" },
    ]
  },
  {
    name: "AI & Data Science",
    skills: [
      { name: "PyTorch", level: 70, icon: <SiPytorch className="text-[#EE4C2C]" />, description: "Deep learning framework" },
      { name: "NLTK", level: 75, icon: <BiData className="text-[#3776AB]" />, description: "Natural language processing" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across different domains of software development.
          </p>
        </div>

        {skillCategories.map((category) => (
          <motion.div
            key={category.name}
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              {category.name}
            </h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-lg font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                    <motion.div
                      className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 