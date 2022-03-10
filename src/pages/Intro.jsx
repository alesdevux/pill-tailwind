import { SlideCard } from '../components/SlideCard'
import { CardP } from '../components/CardP'
import { CardList } from '../components/CardList'
import { CardItemList } from '../components/CardItemList'

function Intro() {
  return (
    <>
      <SlideCard title="Hola 👋🏻" cols={2}>
        <div>
          <CardP>
            Soy Ales. Antes del desarrollo me interesó el diseño grafico. Hasta que descubri el diseño web y se me abrio un mundo de posibilidades. Desde entonce me tira más el código que el diseño, pero me fascinan cuando se fusionan ambas cosas.
          </CardP>
          <CardP>
            Por eso te doy la bienvenida a mi pildora sobre Tailwind CSS.
          </CardP>
          <CardP>
            Para hecer la presentación he pensado que seria interesante usar la misma tecnología de la que hablo. Por lo que he creado esa página web usando Tailwind CSS, y en ese caso, acompañado de React.
          </CardP>
          <CardP>
            En esta página, te explico un poco su contexto cómo funciona el framework, y te muestro algunos ejemplos para que puedas practicar.
          </CardP>
        </div>
        <div>
          <img src="src\assets\emojis\feliz.png" alt="Imagen de unicornio feliz"/>
        </div>
      </SlideCard>
      <SlideCard title="Qué haremos en esa pildora?">
        <CardList>
          <CardItemList>Aprender que es Tailwind CSS</CardItemList>
          <CardItemList>Cuando escoger Tailwind, otros Framworks o CSS puro</CardItemList>
        </CardList>
      </SlideCard>
    </>
  )
}

export { Intro }