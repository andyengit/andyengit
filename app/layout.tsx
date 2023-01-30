import "../styles/globals.css"
import style from "./header.module.css"
import { AnalyticsWrapper } from "../components/Analytics"
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
          {children}
        </main>
        <footer className={style.footer}>
          Anderson Armeya - 2023
        </footer>
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
