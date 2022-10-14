import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link to='/'>
                <img className="navbar-brand" src="M3Racing-logo.webp" href="!#" />
                
            </Link>
                 <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="nav-link btn btn-outline-dark" href="!#">Productos</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-outline-dark" href="!#">Nosotros</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-outline-dark" href="!#">Contacto</button>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget className='cart'/>
        </nav>
    )
}

export default Navbar