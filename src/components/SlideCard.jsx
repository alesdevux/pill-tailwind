import { CardTitle } from "./CardTitle"
import { CardCenter } from "./CardCenter"

function SlideCard({ children, title }) {
  return (
    <div className="w-11/12 h-full px-6 py-4 border-2 snap-center shrink-0">
      <CardTitle title={title} />
      <CardCenter>
        { children }
      </CardCenter>
    </div>
  )
}

export { SlideCard }