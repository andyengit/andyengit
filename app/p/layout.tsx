import style from "./content.module.css"
import HeaderSearch from "../../components/HeaderSearch"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className={style.header}>
        <h3 className={style.name}>Andy A.</h3>
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
