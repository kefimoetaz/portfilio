import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaBicycle, FaMapMarkedAlt, FaUsers, FaCloudSun } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiWebrtc } from 'react-icons/si';

export default function CycleSphereProject() {
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
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
              alt="CycleSphere Interface"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              CycleSphere – Global Cycling Tracker & News Hub
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Next.js
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                TypeScript
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                TailwindCSS
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                MongoDB
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                WebSockets
              </span>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                CycleSphere is a comprehensive cycling platform that combines route tracking, community features, and cycling news. It helps cyclists track their rides, connect with other riders, and stay updated with the latest cycling news and weather conditions.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaMapMarkedAlt className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Live Route Tracking</h3>
                      <p className="text-gray-600 dark:text-gray-300">Track rides with distance, duration, elevation, and route maps</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaUsers className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Community Features</h3>
                      <p className="text-gray-600 dark:text-gray-300">Global challenges, leaderboards, and ride sharing</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaCloudSun className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Weather Integration</h3>
                      <p className="text-gray-600 dark:text-gray-300">Real-time weather forecasts for planned routes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaBicycle className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Maintenance Tracker</h3>
                      <p className="text-gray-600 dark:text-gray-300">Log and schedule bike maintenance tasks</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technical Implementation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Next.js with TypeScript</li>
                    <li>TailwindCSS for styling</li>
                    <li>Mapbox/Leaflet for route visualization</li>
                    <li>Real-time updates with WebSocket</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Backend</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    <li>Node.js server</li>
                    <li>MongoDB database</li>
                    <li>REST APIs integration</li>
                    <li>Weather API integration</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Impact</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                CycleSphere demonstrates expertise in full-stack development, real-time data handling, and API integration. It combines practical features for cyclists with social and community aspects, creating a comprehensive platform for cycling enthusiasts.
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