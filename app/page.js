"use client"

import "./lib/fontawesome.js"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { useState, useEffect } from "react"

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
  faBrain, // Memory icon
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "./(components)/Button"
import Input from "./(components)/Input"

export default function Dashboard() {
  const [memory, setMemory] = useState("")
  const [showMemory, setShowMemory] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [tempMemory, setTempMemory] = useState("")

  // Load memory from localStorage on component mount
  useEffect(() => {
    const savedMemory = localStorage.getItem("aiMemory")
    if (savedMemory) {
      setMemory(savedMemory)
    }
  }, [])

  // Save memory to localStorage when it changes
  useEffect(() => {
    if (memory) {
      localStorage.setItem("aiMemory", memory)
    }
  }, [memory])

  const handleSaveMemory = () => {
    setMemory(tempMemory)
    setIsEditing(false)
  }

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

      {showMemory && (
        <div className="bg-gray-800 p-6 rounded-lg shadow mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-300">
              Chat Memory
            </h2>
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <Button
                    content="Save"
                    className="bg-green-600 hover:bg-green-700 px-3 py-1"
                    onClick={handleSaveMemory}
                  />
                  <Button
                    content="Cancel"
                    className="bg-gray-600 hover:bg-gray-700 px-3 py-1"
                    onClick={() => setIsEditing(false)}
                  />
                </>
              ) : (
                <Button
                  content="Edit"
                  className="bg-secondary px-3 py-1"
                  onClick={() => {
                    setTempMemory(memory)
                    setIsEditing(true)
                  }}
                />
              )}
            </div>
          </div>

          {isEditing ? (
            <textarea
              value={tempMemory}
              onChange={(e) => setTempMemory(e.target.value)}
              className="w-full bg-gray-700 text-white p-3 rounded min-h-[150px]"
              placeholder="Edit the AI's memory..."
            />
          ) : (
            <div className="bg-gray-700 text-white p-3 rounded min-h-[150px] whitespace-pre-wrap">
              {memory || "No memory stored yet."}
            </div>
          )}
        </div>
      )}

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

      <div className="flex gap-x-6 items-center">
        <Button
          content={<FontAwesomeIcon icon={faBrain} />}
          className={`p-2 transition-colors ${
            showMemory ? "bg-secondary" : "bg-gray-700 hover:bg-gray-600"
          }`}
          onClick={() => setShowMemory(!showMemory)}
        />

        <Input
          type="text"
          placeholder="What would you like to ask?"
          className="bg-gray-700 border-0 flex-grow focus:ring-primary"
        />

        <Button
          content={<FontAwesomeIcon icon={faPaperPlane} fixedWidth />}
          className="bg-primary p-2 hover:bg-primary-dark transition-colors"
          aria-label="Send message"
        />

        <Button
          content={<FontAwesomeIcon icon={faPaperclip} fixedWidth />}
          className="bg-gray-700 hover:bg-gray-600 transition-colors p-2"
          aria-label="Attach file"
        />

        <Button
          content={<FontAwesomeIcon icon={faFileZipper} fixedWidth />}
          className="bg-gray-700 hover:bg-gray-600 transition-colors p-2"
          aria-label="Attach zip file"
        />
      </div>
    </div>
  )
}
