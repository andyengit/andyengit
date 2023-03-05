import style from "../content.module.css"

function Page({ params }) {
  console.log(params.title)
  return <>
    <div className={style.info}>
      <h3>Bienvenidos a mi web</h3>
      <span>Domingo 05 Enero del 2023</span>
    </div>
    <div className={style.text}>
      Simplemente anunciarles aque apartir de ahora, este sera un espacio de comunicacion acerca
      de mis nuevos proyectos e ideas. Asi como tambien un espacio dirigido a solucionar problemas
      (no mentales) acerca de programacion.
    </div>
    <div className={style.text}>
      Mis expectativas es que alguien pueda venir aca y aprender de algo que nadie pudo darle
      respuesta
    </div>
  </>
}

export default Page
