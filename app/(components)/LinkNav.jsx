import Link from "next/link"
import Button from "./Button"

const LinkNav = ({ href, content, className }) => {
  return (
    <Link href={href}>
      <Button
        content={content}
        className={`${className ? className : ""} cursor-pointer`}
      />
    </Link>
  )
}

export default LinkNav
