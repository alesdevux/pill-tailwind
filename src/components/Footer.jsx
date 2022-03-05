function Footer() {
  return (
    <footer className="fixed bottom-0 border-t-2 border-blue-300 z-10 bg-white pl-96 w-screen">
      <div className="personal-container flex justify-between flex-wrap gap-4">
        <p>💚 Desarrollado con amor por
          <a 
            href="https://github.com/aleswebgit"
            title="Ales GitHub"
            target="_blank"
            className="text-green-500 hover:text-green-700 before:content-['_'] after:content-['_']"
          >
            Ales
          </a>
          usando React y Tailwind CSS
        </p>
        <p>🧡 Gracias a
          <a 
            href="https://factoriaf5.org/" 
            title="Factoria F5 web"
            target="_blank"
            className="text-orange-500 hover:text-orange-700 before:content-['_'] after:content-['_']"
          >
            Factoria F5
          </a>
          por motivar a hacer esa pildora
        </p>
      </div>
    </footer>
  )
}

export { Footer }