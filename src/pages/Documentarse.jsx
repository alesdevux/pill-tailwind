import { SlideCard } from '../components/SlideCard'
import { CardP } from '../components/CardP'
import { CardImg } from '../components/CardImg'

function Documentarse() {
  return (
    <>
      <SlideCard 
        title="La importancia de aprender a leer documentación"
        cols={2}
      >
        <div>
          <CardP>
            La importancia de aprender a leer documentación es que es una herramienta que te ayudará a entender el funcionamiento de una tecnología.
          </CardP>
          <CardP>
            En general, en el mundo de la programación, podemos encontrar documentación oficial de practicamente cualquier tecnología.
          </CardP>
          <CardP>
            La forma más fiable de aprender algo es consultar a quien lo ha creado, por lo que usar la documentación es una buena idea.
          </CardP>
          <CardP>
            Si con eso no nos basta, podemos buscar en internet, o consultar videotutoriales, pero eso no es tan fiable y tienen más números de estar desactualizados.
          </CardP>
        </div>
        <CardImg src="src\assets\emojis\boom.png" alt="Imagen de unicornio explotandole la cabeza" />
      </SlideCard>
    </>
  )
}

export { Documentarse }