import SearchComponent from "../../components/Search"

function Search({ searchParams } : any): JSX.Element {
  return <div><SearchComponent title={searchParams['title']} />
  </div>
}

export default Search
