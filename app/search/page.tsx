import SearchComponent from "../../components/Search"

interface SerializerSearch {
  searchParams: { [key: string]: string };
}

function Search({ searchParams }: SerializerSearch): JSX.Element {
  return <div><SearchComponent title={searchParams['title']} />
  </div>
}

export default Search
