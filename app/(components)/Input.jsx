const Input = ({
  type = "text",
  placeholder = "",
  className = "",
  value,
  onChange,
  as = "input", // New prop to determine if it's a textarea
  rows, // For textarea
  ...props
}) => {
  const baseClasses =
    "px-4 py-2 border rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-500"

  return as === "textarea" ? (
    <textarea
      placeholder={placeholder}
      className={`${baseClasses} ${className}`}
      value={value}
      onChange={onChange}
      rows={rows || 4} // Default to 4 rows if not specified
      {...props}
    />
  ) : (
    <input
      type={type}
      placeholder={placeholder}
      className={`${baseClasses} ${className}`}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export default Input
