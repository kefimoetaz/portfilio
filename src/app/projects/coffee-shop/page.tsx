import Image from 'next/image';
import Link from 'next/link';

export default function CoffeeShop() {
  return (
    <main className="min-h-screen py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Coffee Shop Project
          </h1>
          <div className="mt-8 relative h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"
              alt="Coffee Shop"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <div className="mt-8 text-left">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">About the Project</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              A modern coffee shop website built with a clean, responsive design. Features include menu display, 
              online ordering system, and shop information.
            </p>
            
            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">Key Features</h3>
            <ul className="mt-4 list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Interactive menu with categories and item details</li>
              <li>Online ordering system with cart functionality</li>
              <li>Real-time order tracking</li>
              <li>Shop location and hours information</li>
              <li>Contact form for inquiries</li>
            </ul>

            <h3 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">Technologies Used</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["HTML", "CSS", "Node.js", "Express"].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  {tech}
                </span>
              ))}
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