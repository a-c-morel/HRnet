import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

function Header() {
  return (
    <header>
      <nav>
        <div className="hrnet__identity">
          <img src={logo} alt='logo HRnet' className="logo"/>
          <h1>
          HRnet
          </h1>
        </div>
        <ul className="navigation">
          <li>
            <NavLink 
              to="/employees"
              className={
                ({ isActive }) => (isActive ? "navbar__link--active" : "navbar__link")
              }
            >
              View Current Employees
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={
                ({ isActive }) => (isActive ? "navbar__link--active" : "navbar__link")
              }
            >
              Create employee
            </NavLink>
          </li>
        </ul>
          
      </nav>
    </header>
  )
}

export default Header
