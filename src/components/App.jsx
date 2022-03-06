import React, { useState } from 'react'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'

import { Intro } from '../pages/Intro'
import { SobreTailwind } from '../pages/SobreTailwind'
import { ProsContras } from '../pages/ProsContras'
import { Documentarse } from '../pages/Documentarse'
import { Practica } from '../pages/Practica'

function App() {
  const [page, setPage] = useState('page-1')

  const sections = [
    { 
      key: 'page-1', 
      title: 'Introducción', 
      archive: 'Intro',
      descripion: 'Introducción a la pildora',
    }, { 
      key: 'page-2', 
      title: 'Sobre Tailwind CSS', 
      archive: 'SobreTailwind',
      descripion: 'Qué es Tailwind CSS',
    }, { 
      key: 'page-3', 
      title: 'Desventajas y Ventajas', 
      archive: 'ProsContras',
      descripion: 'Pros y contras de Tailwind CSS y batalla contra Bootstrap',
    }, { 
      key: 'page-4', 
      title: 'Aprender a documentarse', 
      archive: 'Documentarse',
      descripion: 'La importancia de aprender a leer la documentación',
    }, { 
      key: 'page-5', 
      title: 'Practica', 
      archive: 'Practica',
      descripion: 'Hora de practicar con ese maravilloso framework',
    },
  ]
  const section = sections.find(section => section.key === page)

  return (
    <>
      <Header
        page={page}
        setPage={setPage}
        sections={sections}
      />
      <Main
        page={page}
        title={section.title}
        descripion={section.descripion}
      >
        {section.archive === 'Intro' ? <Intro /> : ''}
        {section.archive === 'SobreTailwind' ? <SobreTailwind /> : ''}
        {section.archive === 'ProsContras' ? <ProsContras /> : ''}
        {section.archive === 'Documentarse' ? <Documentarse /> : ''}
        {section.archive === 'Practica' ? <Practica /> : ''}
      </Main>
      <Footer />
    </>
  )
}

export { App }
