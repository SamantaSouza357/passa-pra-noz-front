import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav>
            <Link  to="/">Home</Link>
            <Link  to="/cadastrar">Cadastrar</Link>
            <Link  to="/login">Login</Link>
            </nav>
        </div>
    )
}
export default Navbar;