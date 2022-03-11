import { SlideCard } from '../components/SlideCard'
import { CardP } from '../components/CardP'
import { CardImg } from '../components/CardImg'

function SobreTailwind() {
  return (
    <>
      <SlideCard title="Qué es Tailwind?" cols={2}>
        <div>
          <CardP>
            Tailwind es un Freamwork de estilos CSS que nos permite crear estilos de diseño para nuestras páginas web.
          </CardP>
          <CardP>
            Un framework es una colección de recursos ya preparados para que podamos usar en nuestras aplicaciones.
          </CardP>
          <CardP>
            En el caso de Tailwind, se vasa en Utility-First
          </CardP>
        </div>
        <CardImg src="src\assets\emojis\reto.png" alt="Tailwind" />
      </SlideCard>
      <SlideCard title="Utility-First" cols={2}>
        <div>
          <CardP>
            Utility-First quiere decir que va a procurar implemetar los estilos utilizando clases de utilidad como primera opción, no como única.
          </CardP>
          <CardP>
            Es decir, si queremos una utilidad como añadir un margen a un elemento, no vamos a tener que crear una clase para eso.
          </CardP>
          <CardP>
            En vez de eso, Tailwind ya nos tiene preparada una clase de utilidad para eso.
          </CardP>
        </div>
        <CardImg src="src\assets\support\font-size.png" alt="Ejemplo utility-first" />
      </SlideCard>
    </>
  )
}

export { SobreTailwind }