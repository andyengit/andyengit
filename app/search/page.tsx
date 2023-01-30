'use client'
import SearchComponent from "../../components/Search"
import style from "./searchpage.module.css"
import { useRouter } from "next/navigation"
import { routes } from "../../posts/routes"
import Link from "next/link"

function Search({ searchParams }: any): JSX.Element {
  const router = useRouter()
  console.log(searchParams)

  const goBack = () => {
    router.back()
  }

  return <div className={style.container}>
    <div className={style.return} onClick={goBack}>Volver</div>
    <SearchComponent title={searchParams['title']} />
    {routes.filter((el) =>
      el.title
        .toLowerCase()
        .includes(searchParams['title'].toLowerCase()))
      .map((route: any, key: any) => (
        <Link className={style.option} key={key} href={`/p/${route.url}`}>
          <h4>{route.title}</h4>
          <p>{route.summary}</p>
        </Link>
      ))}
  </div>
}

export default Search
