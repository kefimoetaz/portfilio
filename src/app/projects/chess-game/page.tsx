import Image from 'next/image';
import Link from 'next/link';

export default function ChessGame() {
  return (
    <main className="min-h-screen py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Chess Game Project
          </h1>
          <div className="mt-8 relative h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1586165368502-1bad197a6461"
              alt="Chess Game"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <div className="mt-8 text-left">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">About the Project</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              An interactive web-based chess game that offers both single-player and multiplayer experiences. 
              Built with modern web technologies, it features real-time gameplay, move validation, and 
              an engaging user interface with smooth animations.
            </p>
            
            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">Key Features</h3>
            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Real-time multiplayer gameplay</li>
              <li>Advanced move validation and legal move highlighting</li>
              <li>Game state tracking and move history</li>
              <li>Piece movement animations</li>
              <li>Chat system for multiplayer games</li>
              <li>Game analysis tools</li>
              <li>Player ratings and leaderboard</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">Technologies Used</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "TypeScript", "WebSocket", "CSS"].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Technical Highlights</h3>
              <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>WebSocket implementation for real-time gameplay</li>
                <li>Complex state management for game rules</li>
                <li>Responsive design for mobile and desktop</li>
                <li>Optimized performance for smooth animations</li>
                <li>Secure multiplayer authentication</li>
              </ul>
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 