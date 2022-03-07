import { MenuItem } from './MenuItem'

function Header({ 
  page, 
  setPage, 
  sections 
}) {
  return (
    <header className="fixed z-20 flex flex-col h-screen bg-white border-r-2 border-blue-300 w-80 whitespace-nowrap">
      <div className="p-8">
        <h3 className="text-2xl font-black text-blue-400">Tailwind CSS</h3>
        <h4 className="tracking-wider text-blue-400">Learn with Ales</h4>
      </div>

      <nav className="pb-32 my-auto">
        <ul>
          {sections.map(section => (
            <MenuItem
              key={section.key}
              active={page === section.key}
              onClick={() => setPage(section.key)}
              title={section.title}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export { Header }