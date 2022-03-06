import { MenuItem } from './MenuItem'

function Header({ page, setPage }) {

  const sections = [
    { key: 'page-1', title: 'Intro', archive: 'Intro', svg: 'info' },
    { key: 'page-2', title: 'Sobre Tailwind CSS', archive: 'SobreTailwind', svg: 'about' },
    { key: 'page-3', title: 'Desventajas y Ventajas', archive: 'ProsContras', svg: 'check' },
    { key: 'page-4', title: 'Aprender a documentarse', archive: 'Documentarse', svg: 'doc' },
    { key: 'page-5', title: 'Practica', archive: 'Practica', svg: 'practice' },
  ]

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

      <div className="border-l-2 border-blue-300 grid grid-rows-nav">
        <div className="hover:bg-blue-100 cursor-pointer py-4 px-6 grid justify-center content-end hover:text-blue-400 hover:content-center transition">
          P
        </div>
        <div className="border-y-2 border-blue-300 py-4 px-6 grid justify-center content-center cursor-default">
        </div>
        <div className="hover:bg-blue-100 cursor-pointer py-4 px-6 grid justify-center hover:text-blue-400 hover:content-center transition">
          N
        </div>
      </div>
    </header>
  )
}

export { Header }