function CardP({ children, size = 'text-xs' }) {
  
  return (
    <p className={`py-2 ${size} md:text-base lg:text-lg`}>
      {children}
    </p>
  )
}

export { CardP }