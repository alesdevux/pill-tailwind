function MenuItem(props) {
  return (
    <li className="justify-self-end px-8 py-2 block cursor-pointer hover:text-blue-400 hover:bg-blue-100">
        {props.text}
    </li>
  )
}

export { MenuItem } 