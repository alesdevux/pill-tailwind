import React, { useState } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

function App() {
  const [page, setPage] = useState('page-1')

  return (
    <>
      <Header
        page={page}
        setPage={setPage}
      />
      <Footer />
    </>
  )
}

export { App }
