function CardCenter({ children }) {
  return (
    <div className="grid content-center h-full overflow-y-auto">
      { children }
    </div>
  )
}

export { CardCenter }