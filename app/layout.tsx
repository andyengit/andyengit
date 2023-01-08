import "../styles/globals.css"
import style from "./header.module.css"

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
            <div className={style.logo}>a</div>
            <h3 className={style.title}>Andy News</h3>
            <div>Search</div>
          </header>
          <hr />
          {children}
          <hr />
          <footer className={style.footer}>
              <div className={style.logo}>a</div>
              <span>Anderson Armeya. Todos los derechos reservados 2023</span>
          </footer>
        </main>
      </body>
    </html>
  )
}
