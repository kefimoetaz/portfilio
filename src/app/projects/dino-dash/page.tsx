import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';

export default function DinoDashProject() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8">
          <FaArrowLeft className="mr-2" />
          Back to Portfolio
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
              alt="Dino Dash Deluxe"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">Dino Dash Deluxe</h2>
              <p className="text-lg opacity-90">A modern take on the classic dinosaur game</p>
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Dino Dash Deluxe
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                Java
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                Swing/AWT
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                Game Development
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                Physics Engine
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                Particle Systems
              </span>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p>
                Dino Dash Deluxe is a sophisticated Java-based 2D platformer game inspired by the classic Chrome dinosaur game but with significant enhancements and modern gaming features. The project demonstrates advanced Java programming concepts, game development principles, and creative visual implementations.
              </p>

              <h2>Technical Highlights</h2>
              <h3>Core Technologies</h3>
              <ul>
                <li>Java SE</li>
                <li>Swing/AWT for graphics rendering</li>
                <li>Java Sound API for audio management</li>
                <li>Object-Oriented Programming principles</li>
              </ul>

              <h3>Key Technical Features</h3>
              <h4>Advanced Graphics Engine</h4>
              <ul>
                <li>Custom rendering using Java2D</li>
                <li>Smooth animations and particle systems</li>
                <li>Dynamic day/night cycle with color interpolation</li>
                <li>Parallax scrolling effects for enhanced depth</li>
                <li>Anti-aliased graphics for crisp visuals</li>
              </ul>

              <h4>Game Physics</h4>
              <ul>
                <li>Custom gravity and jump mechanics</li>
                <li>Collision detection system</li>
                <li>Particle physics for visual effects</li>
                <li>Smooth movement interpolation</li>
              </ul>

              <h4>Audio System</h4>
              <ul>
                <li>Dynamic sound effect management</li>
                <li>Cached audio system for performance</li>
                <li>Multiple sound channels support</li>
              </ul>

              <h4>Performance Optimizations</h4>
              <ul>
                <li>Efficient particle system management</li>
                <li>Cached sound resources</li>
                <li>Optimized rendering pipeline</li>
                <li>Memory-efficient obstacle recycling</li>
              </ul>

              <h2>Gameplay Features</h2>
              <h3>Core Mechanics</h3>
              <ul>
                <li>Double jump capability</li>
                <li>Shield power-up system</li>
                <li>Dynamic difficulty scaling</li>
                <li>Progressive speed increase</li>
                <li>Score tracking with high score system</li>
              </ul>

              <h3>Environmental Elements</h3>
              <ul>
                <li>Dynamic weather effects</li>
                <li>Day/night cycle system</li>
                <li>Animated background elements</li>
                <li>Parallax mountain ranges</li>
                <li>Reactive cloud systems</li>
              </ul>

              <h2>Technical Challenges Overcome</h2>
              <ul>
                <li>Implemented smooth particle systems for visual effects</li>
                <li>Created efficient collision detection algorithms</li>
                <li>Developed dynamic difficulty scaling system</li>
                <li>Engineered seamless day/night transition system</li>
                <li>Optimized rendering performance for smooth gameplay</li>
              </ul>

              <h2>Learning Outcomes</h2>
              <ul>
                <li>Advanced Java graphics programming</li>
                <li>Game development architecture</li>
                <li>Real-time physics implementation</li>
                <li>Audio system management</li>
                <li>Performance optimization techniques</li>
                <li>User interface design principles</li>
              </ul>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaGithub className="mr-2" />
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 