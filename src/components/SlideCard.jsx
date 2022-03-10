import { CardTitle } from "./CardTitle"
import { CardCenter } from "./CardCenter"

function SlideCard({ children, title, cols = 1 }) {
  return (
    <div className="w-11/12 h-full px-6 py-4 overflow-hidden border-2 snap-center shrink-0">
      <CardTitle title={title} />
      <CardCenter cols={cols}>
        { children }
      </CardCenter>
    </div>
  )
}

export { SlideCard }