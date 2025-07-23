import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';

export default function BlockCraftProject() {
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
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop"
              alt="BlockCraft"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">BlockCraft</h2>
              <p className="text-lg opacity-90">A voxel-based 3D world exploration game</p>
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              BlockCraft
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                Java
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                OpenGL
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                LWJGL
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                3D Graphics
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                Game Development
              </span>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2>Project Overview</h2>
              <p>
                BlockCraft is a Minecraft-inspired 3D voxel game built in Java using modern OpenGL (LWJGL 3.3.6). The project demonstrates advanced 3D graphics programming, efficient world generation, and modern game development techniques.
              </p>

              <h2>Technical Features</h2>
              <h3>3D Graphics Engine</h3>
              <ul>
                <li>Modern OpenGL implementation through LWJGL</li>
                <li>Custom shader programming</li>
                <li>Skybox with dynamic sky rendering</li>
                <li>Texture atlas system for efficient rendering</li>
                <li>Face culling for performance optimization</li>
              </ul>

              <h3>Block System</h3>
              <ul>
                <li>Multiple block types (GRASS, DIRT, STONE, WOOD, LEAVES, WATER)</li>
                <li>Custom block properties and behaviors</li>
                <li>Efficient block rendering system</li>
                <li>Texture mapping for different block faces</li>
              </ul>

              <h3>World Generation</h3>
              <ul>
                <li>Chunk-based world system</li>
                <li>Dynamic world loading based on player position</li>
                <li>Efficient memory management</li>
                <li>Optimized rendering pipeline</li>
              </ul>

              <h3>Player Controls</h3>
              <ul>
                <li>First-person camera perspective</li>
                <li>Mouse look controls</li>
                <li>WASD movement system</li>
                <li>Block interaction system (placement/removal)</li>
              </ul>

              <h2>Technical Specifications</h2>
              <ul>
                <li>Window Resolution: 1280x720</li>
                <li>V-sync enabled for smooth rendering</li>
                <li>Depth testing for proper 3D rendering</li>
                <li>Modern OpenGL core profile (version 3.3)</li>
              </ul>

              <h2>Architecture</h2>
              <p>The project uses a well-structured, object-oriented architecture with the following key components:</p>
              <ul>
                <li>BlockCraft: Main game class and entry point</li>
                <li>Camera: Handles player perspective and movement</li>
                <li>World: Manages the game world and chunks</li>
                <li>Block: Represents individual blocks</li>
                <li>BlockType: Defines different types of blocks</li>
                <li>Shader: Handles OpenGL shading</li>
                <li>TextureAtlas: Manages block textures</li>
                <li>Chunk: Handles world subdivisions for efficient rendering</li>
              </ul>

              <h2>Development Status</h2>
              <p>
                The game is currently in active development, with core rendering and world generation systems in place. Future updates will include:
              </p>
              <ul>
                <li>Enhanced block interaction mechanics</li>
                <li>Improved world generation algorithms</li>
                <li>Additional block types and features</li>
                <li>Multiplayer support</li>
              </ul>

              <h2>Technical Challenges Overcome</h2>
              <ul>
                <li>Implemented efficient chunk-based rendering system</li>
                <li>Developed custom shader system for block rendering</li>
                <li>Created optimized texture atlas management</li>
                <li>Engineered smooth camera controls and movement</li>
                <li>Implemented efficient memory management for large worlds</li>
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