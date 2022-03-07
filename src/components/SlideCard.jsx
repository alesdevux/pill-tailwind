import { CardTitle } from "./CardTitle"

function SlideCard({ children, title }) {
  return (
    <div className="w-4/5 h-full px-6 py-4 border-2 snap-center shrink-0">
      <CardTitle title={title} />
      { children }
    </div>
  )
}

export { SlideCard }