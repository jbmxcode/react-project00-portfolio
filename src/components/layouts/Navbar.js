import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

import './Navbar.scss'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => window.innerWidth <= 960 ? setButton(false) : setButton(true)

    console.log(button)

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <header className="header">
                <nav className="nav">
                    <div className="container">
                        <div className="nav-icon" onClick={ handleClick }>
                            { click ? <FaTimes /> : <FaBars /> }
                        </div>
                        <ul className={ click ? "nav-menu active" : "nav-menu" }>
                            <li className="nav-item">
                                <NavLink to="/" exact className="nav-link" onClick={ closeMobileMenu }>Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" onClick={ closeMobileMenu }>Conóceme</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/projects" className="nav-link" onClick={ closeMobileMenu }>Proyectos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" onClick={ closeMobileMenu }>Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>  
            </header>
        </IconContext.Provider>  
    )
}

export default Navbar
