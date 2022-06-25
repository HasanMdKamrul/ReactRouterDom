import { NavLink } from 'react-router-dom';


export default function Navbar() {
    let activeStyle = {
        fontWeight: "bold",
        color: "red", 
        textDecoration: "none"
    }
  return (
    <div>
        <ul>
            <li>
                <NavLink exact = "true" to="/" style = {({isActive})=> isActive? activeStyle: undefined }>
                    Home
                </NavLink>
            </li>
            <li>
            <NavLink exact = "true" to="/about" style = {({isActive})=> isActive? activeStyle: undefined }>
                    About
                </NavLink>
            </li>
            <li>
            <NavLink exact = "true" to="/services" style = {({isActive})=> isActive? activeStyle: undefined }>
                    Services
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
