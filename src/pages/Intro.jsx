import { SlideCard } from '../components/SlideCard'
import { CardP } from '../components/CardP'
import { CardList } from '../components/CardList'
import { CardItemList } from '../components/CardItemList'
import { CardImg } from '../components/CardImg'

function Intro() {
  return (
    <>
      <SlideCard title="Hola 👋🏻" cols={2}>
        <div>
          <CardP>
            Soy Ales. Te doy la bienvenida a mi pildora sobre Tailwind CSS.
          </CardP>
          <CardP>
            Para hecer la presentación he pensado que seria interesante usar la misma tecnología de la que hablo. Por lo que he creado esa página web usando Tailwind CSS, y en ese caso, acompañado de React.
          </CardP>
          <CardP>
            En esta página, te explico un poco su contexto cómo funciona el framework, y te muestro algunos ejemplos para que puedas practicar.
          </CardP>
        </div>
        <CardImg src="src\assets\emojis\feliz.png" alt="Imagen de unicornio feliz" />
      </SlideCard>
      <SlideCard title="Qué haremos en esa pildora?" cols={2}>
        <CardList>
          <CardItemList>Aprender que es Tailwind CSS</CardItemList>
          <CardItemList>Cuando escoger Tailwind, otros Framworks o CSS puro</CardItemList>
          <CardItemList>Utility-First, en que consiste?</CardItemList>
          <CardItemList>La batalla esperada, Tailwind vs. Bootstrap</CardItemList>
          <CardItemList>Diferentes formas de instalación</CardItemList>
          <CardItemList>Aprender a leer la documentación</CardItemList>
          <CardItemList>Aprender a usar Tailwind en un proyecto, LLEGAN LOS RETOS :D</CardItemList>
        </CardList>
        <CardImg src="src\assets\emojis\general.png" alt="Imagen de unicornio mirando atentamente" />
      </SlideCard>
    </>
  )
}

export { Intro }