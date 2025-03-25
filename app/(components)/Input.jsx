const Input = ({
  type = "text",
  placeholder = "",
  className = "",
  value,
  onChange,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-4 py-2 border rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export default Input
