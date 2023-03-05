import style from "./content.module.css"
import HeaderSearch from "../../components/HeaderSearch"
import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className={style.header}>
        <Link href="/">
          <h3 className={style.name}>Andy A.</h3>
        </Link>
        <HeaderSearch />
      </div>
      <div className={style.container}>
        <div className={style.content}>
          {children}
        </div>
        <section className={style.slidebar}>
          En Construcción
        </section>
      </div>
    </>
  )
}
