function TextLink({
  href,
  title,
  color,
  children,
}) {
  /* let linkColor
  let linkHoverColor
  switch (color) {
    case 'green':
      linkColor = 'text-green-500'
      linkHoverColor = 'text-green-700'
      break
    case 'red':
      linkColor = 'text-red-500'
      linkHoverColor = 'text-red-700'
      break
    case 'orange':
      linkColor = 'text-orange-500'
      linkHoverColor = 'text-orange-700'
      break
    default:
      linkColor = 'text-blue-500'
      linkHoverColor = 'text-blue-700'
      break
  } */
  let colorsAccept = ['green', 'red', 'orange', 'blue']
  let linkColor = colorsAccept.includes(color) ? `text-${color}-500` : 'text-sky-500'
  let linkHoverColor = colorsAccept.includes(color) ? `text-${color}-700` : 'text-sky-900'
  return (
    <a 
      href={href}
      title={title}
      target="_blank"
      className={`${linkColor} hover:${linkHoverColor} before:content-['_'] after:content-['_']`}
    >
      {children}
    </a>
  )
}

export { TextLink }