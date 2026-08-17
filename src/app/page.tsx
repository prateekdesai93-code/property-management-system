export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            🏘️ Property Management System
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Streamline your property operations with an intuitive management platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">✨ Key Features</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                Property listing and management
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                Tenant information tracking
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                Maintenance request system
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                Lease management
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                Payment tracking
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">🚀 Getting Started</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Start managing your properties efficiently today. Our platform provides all the tools you need to:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Organize and track multiple properties</li>
              <li>• Manage tenant relationships</li>
              <li>• Schedule and track maintenance</li>
              <li>• Monitor financial performance</li>
              <li>• Generate reports and analytics</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg mb-6">Join property managers worldwide using this system</p>
          <a
            href="#"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Start Managing Properties
          </a>
        </div>

        <div className="text-center mt-16 text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            Built with Next.js • Deployed on Vercel • Made with ❤️
          </p>
        </div>
      </div>
    </div>
  );
}
