"use client"

const Button = ({ content, className = "", onClick, ...props }) => {
  const baseClasses = "rounded cursor-pointer py-2 px-3 transition-colors"

  const handleClick = (e) => {
    if (typeof onClick === "function") {
      onClick(e)
    }
  }

  return (
    <button
      className={`${baseClasses} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button
