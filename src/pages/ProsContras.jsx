import { SlideCard } from '../components/SlideCard'
import { CardList } from '../components/CardList'
import { CardItemList } from '../components/CardItemList'
import { CardImg } from '../components/CardImg'

function ProsContras() {
  return (
    <>
      <SlideCard title="Tailwind VS Bootstrap" cols={3}>
        <div>
          <h3 className="text-xl font-black">Bootstrap</h3>
          <CardList>
            <CardItemList>Componentes</CardItemList>
            <CardItemList>Tener conocimientos de Bootstrap</CardItemList>
            <CardItemList>No puedes crear tus propios componentes sin sobrescribir con CSS</CardItemList>
            <CardItemList>Importa todo el framework, uses las clases o no</CardItemList>
            <CardItemList>Debes aprenderte las clases</CardItemList>
            <CardItemList>Para personalizar debes luchar contra el Bootstrap</CardItemList>
          </CardList>
        </div>
        <CardImg src="src\assets\emojis\cabreo.png" alt="Unicornio cabreado" />
        <div>
          <h3 className="text-xl font-black">Tailwind</h3>
          <CardList>
            <CardItemList>Utilidades</CardItemList>
            <CardItemList>Tener conocimientos de CSS</CardItemList>
            <CardItemList>Puedes crear tus propios componentes sin sobrescribir con CSS</CardItemList>
            <CardItemList>Importa solo las clases que utilices</CardItemList>
            <CardItemList>Clases intuitivas</CardItemList>
            <CardItemList>Facil personalización</CardItemList>
          </CardList>
        </div>
      </SlideCard>
    </>
  )
}

export { ProsContras }