import {MenuItem} from './MenuItem'

function Header() {
  return (
    <header className="border-r-2 border-blue-300 w-96 fixed h-screen z-20 bg-white flex">
      <div className="flex whitespace-nowrap flex-col w-full">
        <div className="p-8">
          <h3 className="text-blue-400 font-black text-2xl">Tailwind CSS</h3>
          <h4 className="text-blue-400 tracking-wider">Learn with Ales</h4>
        </div>

        <nav className="my-auto pb-32">
          <ul>
            <MenuItem id="1" text="Intro" />
            <MenuItem id="2" text="Sobre Tailwind CSS" />
            <MenuItem id="3" text="Desventajas y Ventajas" />
            <MenuItem id="4" text="Aprender a documentarse" />
            <MenuItem id="5" text="Practica" />
          </ul>
        </nav>
      </div>

      <div className="border-l-2 border-blue-300 grid grid-rows-nav">
        <div className="hover:bg-blue-100 cursor-pointer py-4 px-6 grid justify-center content-end hover:text-blue-400">
          P
        </div>
        <div className="border-y-2 border-blue-300 hover:bg-blue-100 cursor-pointer py-4 px-6 grid justify-center content-center hover:text-blue-400">
          I
        </div>
        <div className="hover:bg-blue-100 cursor-pointer py-4 px-6 grid justify-center hover:text-blue-400">
          N
        </div>
      </div>
    </header>
  )
}

export { Header }