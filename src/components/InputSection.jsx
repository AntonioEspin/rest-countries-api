/* eslint-disable react/prop-types */
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import '../styles/InputSection.css'
import { useRef } from "react";

export function InputSection ({search, setSearch}) {

  const inputRef = useRef()

  const handleInput = (e) => {
    e.preventDefault()
    const value = inputRef.current.value
    console.log(value)
    setSearch(value)
  }
  return (
    <form className="form" onSubmit={handleInput}>
      <input ref={inputRef} type="text" placeholder="Search for a country..."/>
      
      <nav className="nav-filter">
        <div className="tag-name-filter">
          <span>Filter by Region</span>
          <MdOutlineKeyboardArrowDown/>
        </div>
        <ul className="options">
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </nav>
    </form>
  )
}