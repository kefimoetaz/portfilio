import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaUnity, FaReact } from 'react-icons/fa';
import { SiThreejs, SiWebgl, SiMongodb, SiWebxr } from 'react-icons/si';

export default function TrailProject() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
        >
          ← Back to Projects
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
              alt="3D Trail Exploration Interface"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              3D Trail Exploration
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Three.js
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                WebGL
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                React
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                MongoDB
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                WebXR
              </span>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                An immersive 3D hiking trail exploration platform that combines realistic terrain visualization, interactive audio guides, and educational content. Users can explore famous trails like the Appalachian Trail and Yosemite National Park in a virtual environment.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
                <li>Realistic 3D terrain generation using heightmap data</li>
                <li>Interactive camera controls for exploration</li>
                <li>Dynamic audio guide with ambient nature sounds</li>
                <li>Trail difficulty ratings and progress tracking</li>
                <li>Environmental education and trivia system</li>
                <li>Community features for sharing experiences</li>
                <li>VR compatibility for immersive exploration</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technical Implementation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Three.js for 3D rendering</li>
                    <li>WebGL for low-level graphics</li>
                    <li>React for UI components</li>
                    <li>Web Audio API for sound</li>
                    <li>WebXR for VR support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Backend</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Node.js server</li>
                    <li>MongoDB database</li>
                    <li>WebSocket for real-time features</li>
                    <li>JWT authentication</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Impact</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This project demonstrates advanced skills in 3D web development, real-time audio processing, and interactive user experiences. It combines technical expertise with environmental education, creating an engaging platform for virtual hiking and learning.
              </p>

              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/kefimoetaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-colors duration-300"
                >
                  <FaGithub className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 