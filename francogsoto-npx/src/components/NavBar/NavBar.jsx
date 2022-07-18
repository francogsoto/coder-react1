import React from 'react'
import './NavBar.css'
import Cartwidget from './Cartwidget/Cartwidget'

const NavBar = () => {
    console.log("Test")
  return (
    <div className="NavMenu">
        <nav style = {{color: 'white'}}>
            <h3>Ecommerce</h3>
            <ul>
                <li> <a href="">Inicio</a></li>
                <li> <a href="">Menu</a> </li>
                <li><a href="">Contacto</a></li>
                <li><a href="">Nosotros</a></li>
            </ul>
            <Cartwidget/> 
        </nav>
    </div>
  )
}

export default NavBar