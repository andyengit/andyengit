'use client'

import SearchComponent from "../../components/Search"
import style from "./searchpage.module.css"
import { routes } from "../../posts/routes"
import Link from "next/link"
import { RxTransparencyGrid } from "react-icons/rx"

function Search({ searchParams }: any): JSX.Element {
  console.log(searchParams)

  const pages = routes.filter((el) =>
    el.title
      .toLowerCase()
      .includes(searchParams['title']))



  return <div className={style.container}>
    <div className={style.return}><Link href="/">Volver</Link></div>
    <SearchComponent title={searchParams['title']} />
    {pages.length > 0 ? pages.map((route: any, key: any) => (
      <Link className={style.option} key={key} href={`/p/${route.url}`}>
        <h4>{route.title}</h4>
        <p>{route.summary}</p>
      </Link>
    )) : <div className={style.noexist}>
      <RxTransparencyGrid  size="5rem"/>
      <h3>Mmm, creo que no esta lo que buscas</h3>
    </div>}
  </div>
}

export default Search
