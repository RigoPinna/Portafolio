import React from 'react'
import { MyLogo } from '../Icons/MyLogo'
import { MenuPrimary } from './MenuPrimary'

export const NavBar = () => {
    return (
        <nav className="__navbar">
            <MyLogo />
            <MenuPrimary />
        </nav>
    )
}
