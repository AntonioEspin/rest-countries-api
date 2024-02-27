import { IoMoonOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import '../styles/Header.css';

export function Header () {
  return (
    <header className="header">
      <h1>Where in the world?</h1>
      <div className="header-darkMode">
        <IoMoonOutline/>
        <span>Dark Mode</span>
      </div>
    </header>
  )
}