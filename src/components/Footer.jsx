import { TextLink } from './TextLink'

function Footer() {
  return (
    <footer className="fixed bottom-0 z-10 w-screen bg-white border-t-2 border-blue-300 pl-96">
      <div className="flex flex-wrap justify-between gap-4 personal-container">
        <p>💚 Desarrollado con amor por
          <TextLink 
            href="https://github.com/aleswebgit"
            title="Ales GitHub"
            color="green"
          >
            Ales
          </TextLink>
          usando React y Tailwind CSS
        </p>
        <p>🧡 Gracias a
          <TextLink 
            href="https://factoriaf5.org/"
            title="Factoria F5 web"
            color="orange"
          >
            Factoria F5
          </TextLink>
          por motivar a hacer esa pildora
        </p>
      </div>
    </footer>
  )
}

export { Footer }