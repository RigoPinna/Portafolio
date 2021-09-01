import React from 'react'
const items = [ "Inicio", "Acerca de mi", "Mis skills", "Contactame" ]
export const Menu = () => {
    return (
        <ul className="__navbar_menu">
                <li><a href="#Presentation">Inicio</a></li>
                <li><a href="#About">Acerca de mi</a></li>
                <li><a href="#Skills">Mis skills</a></li>
                <li><a href="#Contact">Contactame</a></li>
            </ul>
    )
}
