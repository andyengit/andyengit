import Image from 'next/image';
import style from "./index.module.css"
import HeaderSearch from "../components/HeaderSearch"
import Link from 'next/link';

function Index(): JSX.Element {
  return <section className={style.section}>
    <div className={style.header}>
      <Link href="/">
        <h3 className={style.name}>Andy A.</h3>
      </Link>
      <HeaderSearch />
    </div>
    <div className={style.text}>
      <span>Hola, soy desarrollador web,</span>
      <span>como profesional y pasatiempo.</span>
      <span>Y claro, amante del <span className={style.cafe}>cafe</span>.</span>
      <p>Puedes encontrarme en <a href="https://www.linkedin.com/in/andyenin/">Linkedin</a></p>
    </div>
  </section>;
}

export default Index
