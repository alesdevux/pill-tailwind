function Main({ 
  children,
  title, 
  descripion,
}) {
  return (
    <main className="fixed w-screen h-screen pb-16">
      <div className="flex flex-col h-full pb-4">
        <div className="max-w-5xl p-8 mr-0 ml-96">
          <h1 className="text-2xl font-black text-blue-400">{title}</h1>
          <p className="text-blue-400">{descripion}</p>
        </div>
        <section className="flex flex-1 h-full gap-8 px-8 overflow-x-auto snap-x snap-mandatory ml-96 container-snap">
          { children }
        </section>
      </div>
    </main>
  )
}

export { Main }