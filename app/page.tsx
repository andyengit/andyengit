import Image from 'next/image';
import style from "./index.module.css"

function Index(): JSX.Element {
  return <section className={style.section}>
    <div className={style.post}>
      <div className={style.text}>
        <div className={style.info}>
          <h3 className={style.title}>¿Quien es Andy?</h3>
          <span className={style.date}>7 enero 2023</span>
        </div>
        <p>Soy Anderson Armeya, un desarrollador de software con titulo de &quot;TSU en Informatica&quot;,
          actualmente me especializo en el desarrollo de modulos de <a target="_blank" rel="noreferrer" href="https://www.odoo.com/es_ES">Odoo (OpenERP)</a> junto a: <a target="_blank" rel="noreferrer" href="https://binauraldev.com/">Binaural, C.A.</a>
        </p>
        <p>
          Me caracterizo por ser una persona extrovertida y creativa, explotando mis habilidades al
          100%, uno de mis trabajos tambien lo es la animacion y recreacion, el cual realizo en mis
          tiempos libres.
        </p>
      </div>
      <div className={style.photo}>
        <Image src="/img/profile.jpg" fill alt="Anderson Armeya" />
      </div>
    </div>
    <div className={style.post2}>
      <div className={style.photo}>
        <Image src="/img/me.jpg" fill alt="Anderson Armeya" />
      </div>
      <div className={style.text}>
        <div className={style.info}>
          <h3 className={style.title}>Experiencias</h3>
        </div>
        <p>
          Desde 2020 comence en el desarrollo web mediante el lenguaje de programacion php, en un
          proyecto de Gestion de citas medicas, donde pude aprender las bases del modelo MVC y POO.
          Luego de culminar exitosamente el proyecto anterior decidí comenzar con un nuevo lenguaje,
          en este caso Javascript mediante el framework React, donde pude conocer las peticiones HTTP
          y el funcionamiento de las API, este proyeto fue un CMS que consistia en manejar el contenido
          de una institucion universitaria, siendo lo mas escencial los posts.
          Fue en 2021 fue un punto clave ya que decidi migrar el codigo que tenia en el proyecto CMS
          a el framework de NextJS, siendo este mi proyecto para obtar el titulo unversitario.
        </p>
        <p>
          En agosto de 2022 empiezo a trabajar en: <a target="_blank" rel="noreferrer" href="https://binauraldev.com/">Binaural</a> como desarrollador backend, con conocimientos en 0% de python y Odoo, sin embargo pude adaptarme muy bien corto tiempo.
          Aqui comence a realizar modificaciones a modulos de Odoo v14 y v15, y no es hasta
          hasta septiembre que se me asigna el proyecto Point of Sale (POS o Punto de Venta).
          Debido a los requerimientos de este proyecto pudo adquirir conocimientos en Odoo Owl
          (framework tipo react para Odoo), <a target="_blank" rel="noreferrer" href="https://www.odoo.com/es_ES/app/iot">IoT (rasberrypi)</a> y sus conexiones mediante Serial a las
          Maquinas fiscales en Venezuela, en especifico a las <a target="_blank" rel="noreferrer" href="http://www.thefactoryhka.com/ve/home">The factory HKA</a>
        </p>
      </div>
    </div>
  </section>;
}

export default Index
