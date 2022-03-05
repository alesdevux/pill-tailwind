function MenuItem(props) {
  return (
    <li className="justify-self-end">
      <a href="#"
        className="border-2 px-4 py-1 block hover:bg-blue-400 hover:border-blue-400 hover:text-white"
      >
        {props.text}
      </a>
    </li>
  )
}

export { MenuItem } 