import React from 'react'
import './NavBar.css'

const NavBar = () => {
    console.log("Test")
  return (
    <div className="NavMenu">NavBar
        <nav style = {{color: 'white'}}>
            {/* <img src="https://place-hold.it/50x30?text=LOGO" alt="" width="50" height="30" /> */}
            <h1>Ecommerce</h1>
            <ul>
                <li> <a href="">Inicio</a></li>
                <li> <a href="">Menu</a>
                {/* <ul>
                <li><a href="">Producto1</a></li>
                <li><a href="">Producto2</a></li>
                </ul> */}
                </li>
                <li><a href="">Contacto</a></li>
                <li><a href="">Nosotros</a></li>

                
            </ul>
        </nav>
    </div>
  )
}

export default NavBar