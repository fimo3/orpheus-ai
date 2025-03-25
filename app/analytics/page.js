export default function Analytics() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Usage Statistics</h2>
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
            <p className="text-gray-500">Chart will appear here</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">User Activity</h2>
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
            <p className="text-gray-500">Activity graph will appear here</p>
          </div>
        </div>
      </div>
    </div>
  )
}
