/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import '../styles/InputSection.css'

export function InputSection ({search, setSearch, setFilterByRegion, getCountries, error}) {

  const [openNav, setOpenNav] = useState(false)

  const inputRef = useRef()

  const handleOpenNav = () => {
    setOpenNav(!openNav)
  }

  const handleOnChange = (e) => {
    const value = e.target.value
    setSearch(value)
    getCountries({value})
  }

  const handleInput = (e) => {
    e.preventDefault()
    const value = inputRef.current.value
    setSearch(value)
    getCountries({value})
  }

  const handleFilterByRegion = (e) => {
    const value = e.target.innerText.toLowerCase()
    setFilterByRegion(value)
    setOpenNav(!openNav)
  }

  return (
    <form className="form" onSubmit={handleInput}>
      <input value={search} ref={inputRef} type="text" placeholder="Search for a country..." onChange={handleOnChange}/>
      {error ? <p>No hay información disponible</p> : ''}
      
      <nav className="nav-filter">
        <div className="tag-name-filter">
          <span>Filter by Region</span>
          <MdOutlineKeyboardArrowDown onClick={handleOpenNav}/>
        </div>
        <ul className={`options ${openNav ? 'active-nav' : ''}`}>
          <li onClick={handleFilterByRegion}>All</li>
          <li onClick={handleFilterByRegion}>Africa</li>
          <li onClick={handleFilterByRegion}>Americas</li>
          <li onClick={handleFilterByRegion}>Asia</li>
          <li onClick={handleFilterByRegion}>Europe</li>
          <li onClick={handleFilterByRegion}>Oceania</li>
        </ul>
      </nav>
    </form>
  )
}