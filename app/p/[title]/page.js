import style from "../content.module.css"
import Code from "../../../components/Code"

function Page({ params }) {
  console.log(params.title)
  return <>
    <div className={style.info}>
      <h3>Bienvenidos a mi web</h3>
      <span>Sábado 28 Enero del 2023</span>
    </div>
    <div className={style.text}>
    </div>
  </>
}

export default Page
