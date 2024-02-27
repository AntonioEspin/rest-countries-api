import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import '../styles/InputSection.css'

export function InputSection () {
  return (
    <form className="form">
      <input type="text" placeholder="Search for a country..."/>
      
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