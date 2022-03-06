function Main({ 
  children,
  title, 
  descripion,
}) {
  return (
    <main className="h-screen ml-96 pt-4 pb-16">
      <div className="personal-container">
        <h1 className="text-2xl font-black text-blue-400">{title}</h1>
        <p className="text-blue-400">{descripion}</p>
        <section>
          { children }
        </section>
      </div>
    </main>
  )
}

export { Main }