import { SlideCard } from '../components/SlideCard'
import { CardP } from '../components/CardP'

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
            En vez de eso, Tailwind ya nos tiene prepparada una clase de utilidad que ya está preparada para eso.
          </CardP>
        </div>
        <div>
          <img src="src\assets\support\font-size.png" alt="Ejemplo utility-first" />
        </div>
      </SlideCard>
    </>
  )
}

export { SobreTailwind }