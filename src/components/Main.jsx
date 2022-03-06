function Main({ title, children }) {
  return (
    <main className="h-screen ml-96 pt-4 pb-16">
      <div className="personal-container">
        <h1 className="text-2xl font-black text-blue-400">{title}</h1>
        <section>
          { children }
        </section>
      </div>
    </main>
  )
}

export { Main }