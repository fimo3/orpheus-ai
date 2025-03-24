import Image from "next/image"
import logo from "./(assets)/orpheus_logo.png"

export default function Dashboard() {
  return (
    <div>
      <div className="flex items-center justify-center gap-x-3 mb-6 ">
        <Image
          src={logo}
          alt="Orpheus AI Logo"
          className="mr-3 max-h-20 max-w-20 rounded-2xl"
        />
        <h1 className="text-4xl">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-2xl text-gray-400">Can you fix my code?</h3>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-2xl text-gray-400">
            Make me an online multiplayer <br /> version of pong.
          </h3>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="text-2xl text-gray-400">
            Can you teach me how to code websites?
          </h3>
        </div>
      </div>
    </div>
  )
}
