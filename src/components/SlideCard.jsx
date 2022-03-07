function SlideCard({ children }) {
  return (
    <div className="w-4/5 h-full snap-center bg-violet-400 shrink-0">
      { children }
    </div>
  )
}

export { SlideCard }