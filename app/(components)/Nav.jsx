"use client"

import LinkNav from "./LinkNav"

const Nav = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 border-r border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700">
      <nav className="p-4">
        <ul className="space-y-4">
          <li className="mb-6">
            <h3 className=" font-bold text-gray-800 dark:text-white">
              Orpheus AI
            </h3>
          </li>
          {[
            { href: "#", content: "Dashboard" },
            { href: "#", content: "Projects" },
            { href: "#", content: "Analytics" },
            { href: "#", content: "Settings" },
            { href: "#", content: "Support" },
          ].map((link, index) => (
            <li key={index}>
              <LinkNav
                href={link.href}
                content={link.content}
                className="px-4 py-3 rounded-lg text-gray-300 hover:bg-primary transition-colors duration-200"
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
