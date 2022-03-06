import { MenuItem } from './MenuItem'

function Header({ 
  page, 
  setPage, 
  sections 
}) {
  return (
    <header className="border-r-2 border-blue-300 w-96 fixed h-screen z-20 bg-white flex">
      <div className="flex whitespace-nowrap flex-col w-full">
        <div className="p-8">
          <h3 className="text-blue-400 font-black text-2xl">Tailwind CSS</h3>
          <h4 className="text-blue-400 tracking-wider">Learn with Ales</h4>
        </div>

        <nav className="my-auto pb-32">
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
      </div>

      <div className="border-l-2 border-blue-300 grid grid-rows-2">
        <div className="hover:bg-blue-100 cursor-pointer py-4 px-6 grid justify-center content-center hover:text-blue-400 transition border-b border-blue-300">
          P
        </div>
        <div className="hover:bg-blue-100 cursor-pointer py-4 px-6 grid justify-center content-center hover:text-blue-400 transition border-t border-blue-300">
          N
        </div>
      </div>
    </header>
  )
}

export { Header }