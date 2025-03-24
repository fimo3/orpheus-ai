const Button = ({ content, className, onClick = () => {} }) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button
