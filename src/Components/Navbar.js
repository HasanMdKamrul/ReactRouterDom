import { NavLink } from 'react-router-dom';
import styles from '../Assests/css/Navbar.module.css';


export default function Navbar() {
    
    const activeStyle = {
        color: 'red',
        textDecoration: 'none',
        fontWeight: 'bold'
    }
  return (
    <div>
        <ul>
            <li>
                <NavLink  to="/" className={(navInfo)=> navInfo.isActive ? styles.NavBar : " "}>
                    Home
                </NavLink>
            </li>
            <li>
            <NavLink  to="/about" className={(navInfo)=> navInfo.isActive ? styles.NavBar : " "}>
                    About
                </NavLink>
            </li>
            <li>
            <NavLink to="/services" style = {(navInfo)=> navInfo.isActive? activeStyle: undefined}>
                    Services
                </NavLink>
            </li>
            <li>
            <NavLink to="/posts" className = {({isActive})=> isActive? styles.NavBar : " "}>
                    Posts
                </NavLink>
            </li>
            <li>
            <NavLink to="/dashboard" className = {({isActive})=> isActive? styles.NavBar : " "}>
                    Dashboard
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
