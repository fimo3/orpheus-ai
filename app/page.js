import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import Image from "next/image"
import logo from "./(assets)/orpheus_logo.png"
import {
  faBug,
  faGamepad,
  faPager,
  faUpRightFromSquare,
  faPaperPlane,
  faPaperclip,
  faFileZipper,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "./(components)/Button"
import Input from "./(components)/Input"

export default function Dashboard() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex items-center justify-center gap-x-3 mb-8">
        <Image
          src={logo}
          alt="Orpheus AI Logo"
          className="mr-3 max-h-20 max-w-20 rounded-2xl"
          width={80}
          height={80}
        />
        <h1 className="text-4xl font-bold">Dashboard</h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[
          { icon: faBug, text: "Can you fix my code?" },
          {
            icon: faGamepad,
            text: "Make me an online\nmultiplayer version of pong.",
          },
          { icon: faPager, text: "Can you teach me how to code websites?" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow flex items-center gap-x-4 hover:bg-gray-700 transition-colors"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-gray-400 text-xl"
              fixedWidth
            />
            <h3 className="text-xl text-gray-400 flex-1 whitespace-pre-line">
              {item.text}
            </h3>
            <Button
              content={
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  className="h-4 w-4 text-white"
                  fixedWidth
                />
              }
              className="bg-primary ml-auto p-2 hover:bg-primary-dark transition-colors"
              aria-label={`Action for ${item.text.split("\n")[0]}`}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-x-6">
        <Input
          type="text"
          placeholder="What would you like to ask?"
          className=" bg-gray-700 border-0 min-w-10/12 focus:ring-primary"
        />
        <Button
          content={
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="h-4 w-4 text-white"
              fixedWidth
            />
          }
          className="bg-primary p-2 hover:bg-primary-dark transition-colors"
          aria-label="Send message"
        />
        <Button
          content={<FontAwesomeIcon icon={faPaperclip} fixedWidth />}
          className="bg-gray-700 hover:bg-gray-600 transition-colors"
          aria-label="Attach file"
        />
        <Button
          content={<FontAwesomeIcon icon={faFileZipper} fixedWidth />}
          className="bg-gray-700 hover:bg-gray-600 transition-colors"
          aria-label="Attach zip file"
        />
      </div>
    </div>
  )
}
