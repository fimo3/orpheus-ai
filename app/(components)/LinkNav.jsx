import Link from "next/link"
import Button from "./Button"

const LinkNav = ({ href, content }) => {
  return (
    <Link href={href}>
      <Button content={content} />
    </Link>
  )
}

export default LinkNav
