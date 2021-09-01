import React, { useState } from 'react'
import { IconMenu } from '../Icons/IconMenu'
import { Menu } from './Menu';

export const MenuPrimary = () => {
    const [viewMenu, setviewMenu] = useState( false );
    const handleViewMenu =  e => {
        setviewMenu(!viewMenu)
    }
    return (
        <>
        <button onClick={ handleViewMenu } >
            <IconMenu />
        </button>
            {
                viewMenu 
                    && <Menu />
            }
        </>
    )
}
