function CardItemList({ children }) {
  return (
    <li className="text-xs md:text-base lg:text-lg decoration-slice">
      { children }
    </li>
  )
}

export { CardItemList }