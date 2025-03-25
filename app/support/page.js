import Input from "../(components)/Input"
import Button from "../(components)/Button"

export default function Support() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Support</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Our Team</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <Input
                type="text"
                className="w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <Input
                as="textarea"
                rows={6} // Custom number of rows
                className="w-full border-gray-300 dark:border-gray-600 dark:bg-gray-700"
              />
            </div>
            <Button
              content="Send Message"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
