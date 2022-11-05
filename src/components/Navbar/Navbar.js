import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <NavLink to='/'>
                <img className="navbar-brand" src="M3Racing-logo.webp" alt="M3Racing" />                
            </NavLink>
                 <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                <NavLink to={'/'}>  <li className="nav-item">
                            <button className="nav-link btn btn-outline-dark" href="!#">Productos</button>
                        </li> </NavLink>
                <NavLink to={'/nosotros'}> <li className="nav-item">
                            <button className="nav-link btn btn-outline-dark" href="!#">Nosotros</button>
                        </li> </NavLink>
                <NavLink to={'/contacto'}>  <li className="nav-item">
                            <button className="nav-link btn btn-outline-dark" href="!#">Contacto</button>
                        </li> </NavLink>
                    </ul>
                </div>
            </div>
            <CartWidget className='cart'/>
        </nav>
    )
}

export default Navbar