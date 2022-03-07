import { SlideCard } from '../components/SlideCard'
import { CardP } from '../components/CardP'

function SobreTailwind() {
  return (
    <>
      <SlideCard title="Qué es Tailwind?">
        <CardP>
          Tailwind es un Freamwork (una biblioteca) de estilos CSS que nos permite crear
          estilos de diseño para nuestras páginas web.
        </CardP>
      </SlideCard>
      <SlideCard title="¿Qué es una biblioteca?">
        <CardP>
          Una biblioteca es una colección de recursos ya preparados para que podamos usar en nuestras aplicaciones.
        </CardP>
        <CardP>
          En el caso de Tailwind, 
        </CardP>
      </SlideCard>
    </>
  )
}

export { SobreTailwind }