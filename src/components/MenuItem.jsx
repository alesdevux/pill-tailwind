function MenuItem({
  active,
  onClick,
  title,
}) {
  return (
    <li 
      className={`justify-self-end px-8 py-2 block cursor-pointer hover:text-blue-400 hover:bg-blue-100 ${active ? 'text-blue-400' : ''}`}
      onClick={onClick}
    >
      {title}
    </li>
  )
}

export { MenuItem } 