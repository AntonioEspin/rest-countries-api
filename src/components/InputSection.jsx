/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import '../styles/InputSection.css'

export function InputSection ({search,searchByRegion, setSearch, setSearchByRegion, getCountries, getCountriesByRegion, error}) {

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

  const handleSearchByRegion = (e) => {
    const value = e.target.innerText.toLowerCase()
    console.log(value)
    setSearchByRegion(value)
    getCountriesByRegion({value})
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
          <li onClick={handleSearchByRegion}>Africa</li>
          <li onClick={handleSearchByRegion}>America</li>
          <li onClick={handleSearchByRegion}>Asia</li>
          <li onClick={handleSearchByRegion}>Europe</li>
          <li onClick={handleSearchByRegion}>Oceania</li>
        </ul>
      </nav>
    </form>
  )
}