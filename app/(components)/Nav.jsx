"use client"

import LinkNav from "./LinkNav"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <h1>Orpheus AI</h1>
        </li>
        <li>
          <LinkNav href="/#" content="Hello World" />
        </li>
        <li>
          <LinkNav href="/#" content="Hello World" />
        </li>
        <li>
          <LinkNav href="/#" content="Hello World" />
        </li>
        <li>
          <LinkNav href="/#" content="Hello World" />
        </li>
        <li>
          <LinkNav href="/#" content="Hello World" />
        </li>
      </ul>
    </nav>
  )
}

export default Nav
