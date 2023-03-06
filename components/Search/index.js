'use client';
import { useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { BiSearchAlt } from "react-icons/bi"
import st from "./search.module.css"

function SearchComponent({ title }) {
  const router = useRouter()
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
    inputRef.current.value = title || ''
  }, [title])

  const onSearch = (e) => {
    if (e.type !== 'keyup' || e.key !== 'Enter') {
      return
    }
    router.replace(`/search?title=${inputRef.current.value}`)
    console.log(e)
  }

  return <div>
    {inputRef.current && inputRef.current.value &&
      <p>Busquedas para {inputRef.current.value}...</p>
    }
    <div className={st.container}>
      <input
        type="text"
        className={st.input}
        ref={inputRef}
        onKeyUp={onSearch} />
      <BiSearchAlt onClick={onSearch} />
    </div>
  </div>
}

export default SearchComponent
