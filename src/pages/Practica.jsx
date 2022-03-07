import { SlideCard } from '../components/SlideCard'
import { CardP } from '../components/CardP'
import { TextLink } from '../components/TextLink'

function Practica() {
  return (
    <>
      <SlideCard title="Practicar para divertirse e interiorizar">
        <CardP>
          Para aprender e interiorizar, es interesante ponerse pequeños o grandes retos que nos motiven a investigar y a recordar lo que hemos aprendido.
        </CardP>
        <CardP>
          Es por eso que he preparado 3 retos.
        </CardP>
      </SlideCard>
      <SlideCard title="Nuevos retos para ti!">
        <CardP>
          Pongamos que has entrado a una empresa. Felicidades te han contratado! 🎉
        </CardP>
        <CardP>
          Conoces el equipo y os caeis bien! Estas feliz y con ganas de ver cual es tu función en el siguiente proyecto.
        </CardP>
        <CardP>
          Allí te entra el miedo! De repente te enteras de que el siguiente proyecto trabajan con Tailwind CSS y tu nunca lo has tocado 😱
        </CardP>
        <CardP>
          Pero tranqui! No pasa nada, si una cosa tenemos las personas que programamos son recursos! 🔍 Así pues recuerdas que la documentación es tu aliada y que puedes consultar la
          <TextLink
            href="https://tailwindcss.com/docs/padding"
            title="documentación de Tailwind CSS"
            color="green"
          >
            documentación de Tailwind CSS
          </TextLink>
          para encontrar como modificar el elemento que te ha pasado el equipo para que tenga el diseño que ha preparado la diseñadora.
        </CardP>
        <CardP>
          Abres el link del reto y aprende a buscar las clases adecuadas para sorprender en tu nuevo trabajo!
        </CardP>
        <CardP>
          Vamos, que tu puedes! 💪
        </CardP>
      </SlideCard>
      <SlideCard title="Reto 1: Infrormación de perfil">
      </SlideCard>
      <SlideCard title="Reto 2: Catalogo de tienda">
      </SlideCard>
      <SlideCard title="Reto 3: Vista de producto">
      </SlideCard>
    </>
  )
}

export { Practica }