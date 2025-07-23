'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
}

export default function ProjectCard({ title, description, imageUrl, projectUrl, tags }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(
    650px circle at ${mouseX}px ${mouseY}px,
    var(--spotlight-color) 0%,
    transparent 100%
  )`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ "--spotlight-color": "rgba(66, 153, 225, 0.075)" } as any}
      className="group relative bg-white dark:bg-gray-800/80 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-200 dark:border-gray-700/50"
    >
      {/* Spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{ background }}
      />

      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        {/* Image container with 3D perspective */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden">
          <motion.div
            className="absolute inset-0 z-10"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))",
              opacity: hovered ? 1 : 0.6,
              transition: "opacity 0.3s ease-in-out",
            }}
          />
          <motion.div
            className="relative h-full w-full"
            animate={{
              scale: hovered ? 1.1 : 1,
              rotateX: hovered ? 2 : 0,
              rotateY: hovered ? -2 : 0,
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          {/* Title and tags overlay */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 z-20"
            animate={{
              y: hovered ? 0 : 5,
              opacity: hovered ? 1 : 0.9,
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/10 shadow-lg"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Content section */}
        <div className="p-6 relative z-20">
          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-4"
            animate={{
              opacity: hovered ? 1 : 0.9,
              y: hovered ? 0 : 2,
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>

          {/* Animated link */}
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={projectUrl}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group/link"
            >
              <span className="relative">
                View Project
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <motion.svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{
                  x: hovered ? 5 : 0,
                  opacity: 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 