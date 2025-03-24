export default function Settings() {
  return (
    <div className="ml-64 p-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <h2 className="text-lg font-medium">Account Settings</h2>
        </div>
        <div className="px-6 py-4 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              defaultValue="user@example.com"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Theme
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700">
              <option>System</option>
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3 text-right">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
