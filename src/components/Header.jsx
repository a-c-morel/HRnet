import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

function Header() {
    return (
        <header>
            <nav>
                <div className="hrnet-identity">
                    <img src={logo} alt='logo HRnet' className="hrnet-identity__logo"/>
                    <h1 className="hrnet-identity__app-name">
                        HRnet
                    </h1>
                </div>
                <ul className="navigation">
                    <li>
                        <NavLink 
                            to="/employees"
                            className={({ isActive }) => 
                              (isActive ? "navbar__link--active" : "navbar__link")
                            }
                        >
                            View Current Employees
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                (isActive ? "navbar__link--active" : "navbar__link")
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
