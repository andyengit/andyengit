import Image from 'next/image';
import style from "./index.module.css"
import HeaderSearch from "../components/HeaderSearch"

function Index(): JSX.Element {
  return <section className={style.section}>
    <div className={style.header}>
      <h3 className={style.name}>Andy A.</h3>
      <HeaderSearch/>
    </div>
    <div className={style.text}>
      <span>Hola, soy desarrollador web,</span>
      <span>como profesional y pasatiempo.</span>
      <span>Y claro, amante del <span className={style.cafe}>cafe</span>.</span>
      <p>Puedes encontrarme en Linkedin, Twitter y Whatsapp </p>
    </div>
  </section>;
}

export default Index
