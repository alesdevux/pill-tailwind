import {MenuItem} from './MenuItem'

function Header() {
  return (
    <header className="flex max-w-5xl mx-auto p-4 border-b-2 gap-4">
      <div className="whitespace-nowrap my-auto">
        <h3 className="text-blue-400 font-black text-2xl">Tailwind CSS</h3>
        <h4 className="text-blue-400 tracking-wider text-center">Learn with Ales</h4>
      </div>

      <nav className="my-auto">
        <ul className="flex flex-wrap gap-2 justify-end">
          <MenuItem text="Intro" />
          <MenuItem text="Sobre Tailwind CSS" />
          <MenuItem text="Desventajas y Ventajas" />
          <MenuItem text="Aprender a documentarse" />
          <MenuItem text="Practica" />
        </ul>
      </nav>
    </header>
  )
}

export { Header }