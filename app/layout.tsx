import "../styles/globals.css"
import style from "./header.module.css"
import { AnalyticsWrapper } from "../components/Analytics"
import { BiSearchAlt } from "react-icons/bi"
import { AiFillLinkedin, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai"
import { BsTwitter } from "react-icons/bs"
import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <main>
          <header className={style.header}>
            <Link href="/">
              <div className={style.logo}>a</div>
            </Link>
            <Link href="/">
              <h3 className={style.title}>Andy News</h3>
            </Link>
            <Link href="/search?title="><BiSearchAlt size="1.5rem" /></Link>
          </header>
          <hr />
          {children}
          <hr />
          <footer className={style.footer}>
            <div className={style.item}>
              <a href="https://linkedin.andersonarmeya.com/"><AiFillLinkedin size="2rem" /></a>
              <a href="https://twitter.andersonarmeya.com/"><BsTwitter size="1.8rem" /></a>
              <a href="https://instagram.andersonarmeya.com/"><AiFillInstagram size="1.95rem" /></a>
              <a href="https://whatsapp.andersonarmeya.com/"><AiOutlineWhatsApp size="1.85rem" /></a>
            </div>
            <div className={style.item}>
              <div className={style.logo}>a</div>
              <span>Anderson Armeya. Todos los derechos reservados 2023</span>
            </div>
          </footer>
          <AnalyticsWrapper />
        </main>
      </body>
    </html>
  )
}
//https://wa.me/584125119913?text=Hola,%20me%20intereso%20lo%20que%20publicaste%20en%20tu%20pagina%20web.%20%C2%BFEstas%20disponible%20para%20charlar?
