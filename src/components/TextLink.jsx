function TextLink({
  href,
  title,
  color,
  children,
}) {
  return (
    <a 
      href={href}
      title={title}
      target="_blank"
      className={`text-${color}-500 hover:text-${color}-700 before:content-['_'] after:content-['_']`}
    >
      {children}
    </a>
  )
}

export { TextLink }