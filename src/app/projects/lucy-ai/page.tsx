import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function LucyProject() {
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
              src="https://images.unsplash.com/photo-1531113165519-5eb0816d7e02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Lucy AI Interface"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Lucy - Cyberpunk-Inspired AI Assistant
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Python
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Tkinter
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                NLTK
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Hugging Face
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                pyttsx3
              </span>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Lucy is an emotionally intelligent AI assistant with a cyberpunk aesthetic. The project combines natural language processing with a sleek interface to create meaningful interactions.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
                <li>Natural Language Processing with NLTK</li>
                <li>Contextual Memory System</li>
                <li>Custom Cyberpunk-themed UI</li>
                <li>Text-to-Speech Capabilities</li>
                <li>Emotional Response System</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Technical Details</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Built with Python and Tkinter for the interface, the project leverages NLTK for natural language processing and Hugging Face's BlenderBot for conversation capabilities. The system includes a custom memory management system and text-to-speech integration.
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 