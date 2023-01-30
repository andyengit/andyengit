'use client'
import { BiSearchAlt } from "react-icons/bi"
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import st from "./headersearch.module.css"

export default function HeaderSearch() {
  const [enable, setEnable] = useState(false)
  const input = useRef()
  const router = useRouter()

  const changeState = () => {
    if (input.current.value !== '') return
    setEnable(!enable)
    if (!enable) input.current.focus()
  }

  const onSearch = (e) => {
    if (e.type !== 'keyup' || e.key !== 'Enter') {
      return
    }
    router.push(`/search?title=${input.current.value}`)
    console.log(e)
  }

  return <div
    className={`${st.search}`}
    onClick={changeState}>
    <input
      ref={input}
      onKeyUp={onSearch}
      placeholder="andy habló de..."
      className={`${st.input} ${enable && st.on}`} type="text" />
    <BiSearchAlt />

  </div>
}
